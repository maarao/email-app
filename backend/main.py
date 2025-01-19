from fastapi import FastAPI

app = FastAPI()
@app.get("/api/v1/hello")
async def read_root():
    return {"message": "Hello from FastAPI!"}
