FROM python:3.13-alpine

WORKDIR /app

# Create and activate virtual environment for uv
RUN python -m venv /app/.venv
ENV PATH="/app/.venv/bin:$PATH"

# install uv for better package management
RUN pip install uv

# Copy requirements first for better caching
COPY requirements.txt .

# Install development dependencies
RUN uv pip install -r requirements.txt

# Copy the rest of the application
COPY . .

# Set default backend port
ENV BACKEND_PORT=8000

# Command to run the application
CMD fastapi run --host 0.0.0.0 --port ${BACKEND_PORT}
