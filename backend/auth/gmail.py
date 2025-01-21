from typing import Optional
import os
from datetime import datetime, timedelta

from fastapi import APIRouter, HTTPException, Request
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.auth.exceptions import RefreshError

router = APIRouter()

# Database setup
DATABASE_URL = f"postgresql://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@db:5432/{os.getenv('POSTGRES_DB')}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# OAuth2 configuration
SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.modify'
]

CLIENT_CONFIG = {
    "web": {
        "client_id": os.getenv("GOOGLE_CLIENT_ID"),
        "client_secret": os.getenv("GOOGLE_CLIENT_SECRET"),
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "redirect_uris": [os.getenv("OAUTH_REDIRECT_URI", "http://localhost:3000/auth/callback")]
    }
}

# Token storage model
class Token(Base):
    __tablename__ = "tokens"

    email = Column(String, primary_key=True)
    access_token = Column(String, nullable=False)
    refresh_token = Column(String, nullable=False)
    expiry = Column(DateTime, nullable=False)

# Create tables
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_flow(state: Optional[str] = None) -> Flow:
    """Create OAuth2 flow instance."""
    flow = Flow.from_client_config(
        client_config=CLIENT_CONFIG,
        scopes=SCOPES
    )
    flow.redirect_uri = CLIENT_CONFIG["web"]["redirect_uris"][0]
    if state:
        flow.state = state
    return flow

@router.get("/auth/url")
async def get_authorization_url():
    """Generate authorization URL for Gmail OAuth2."""
    flow = create_flow()
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true',
        prompt='consent'
    )
    return {"url": authorization_url, "state": state}

@router.get("/auth/callback")
async def auth_callback(request: Request, code: str, state: str):
    """Handle OAuth2 callback and store tokens."""
    flow = create_flow(state)
    
    # Exchange authorization code for tokens
    flow.fetch_token(code=code)
    credentials = flow.credentials

    # Get user email
    service = build('gmail', 'v1', credentials=credentials)
    user_info = service.users().getProfile(userId='me').execute()
    email = user_info['emailAddress']

    # Store tokens in database
    db = next(get_db())
    token = Token(
        email=email,
        access_token=credentials.token,
        refresh_token=credentials.refresh_token,
        expiry=credentials.expiry
    )
    
    try:
        db.merge(token)
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

    return {"message": "Authentication successful", "email": email}

def get_gmail_service(email: str):
    """Get authenticated Gmail service for a user."""
    db = next(get_db())
    token = db.query(Token).filter(Token.email == email).first()
    
    if not token:
        raise HTTPException(status_code=404, detail="User not authenticated")

    credentials = Credentials(
        token=token.access_token,
        refresh_token=token.refresh_token,
        token_uri=CLIENT_CONFIG["web"]["token_uri"],
        client_id=CLIENT_CONFIG["web"]["client_id"],
        client_secret=CLIENT_CONFIG["web"]["client_secret"],
        scopes=SCOPES
    )

    # Refresh token if expired
    if credentials.expired:
        try:
            credentials.refresh(Request())
            token.access_token = credentials.token
            token.expiry = credentials.expiry
            db.commit()
        except RefreshError:
            db.delete(token)
            db.commit()
            raise HTTPException(status_code=401, detail="Authentication expired")

    return build('gmail', 'v1', credentials=credentials)
