# Email App

A mail client that does what I want it to looking how I want it to look (hopefully).

## Stack

### Backend
- FastAPI (Python 3.13)
- UV package manager for faster dependency management
- Hot-reload enabled for development

### Frontend
- Next.js 15
- Development server with hot-reload

## Prerequisites

- Docker and Docker Compose
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/maarao/email-app
cd email-app
```

2. Rename `.env.example` to `.env`

3. Start the development environment:
```bash
./start-dev.sh
```

This will:
- Start both frontend and backend services
- Enable hot-reload for both services
- Mount local directories for real-time development
- Preserve dependencies in isolated volumes

## Development

- Frontend code lives in `./frontend/`
- Backend code lives in `./backend/`
- Both services will automatically reload when you make changes
- Frontend is accessible at `http://localhost:3011`
- Backend is accessible at `http://localhost:8011` if you uncomment the ports in `compose.yml`

## Project Structure

```
.
├── backend/
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   └── package.json
├── compose.yml
├── .env
└── README.md
```

## Features

- 🔥 Hot-reload for both frontend and backend
- 🛠 Development optimized with mounted volumes
- 📦 Isolated dependencies in Docker volumes
- 🚀 Production-ready Dockerfile configurations
- 🔒 Environment variable support

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Not sure yet.
