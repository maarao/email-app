# Use Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json package-lock.json* ./
RUN npm i --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Start the development server with hot reloading
CMD npm run dev -- --port ${FRONTEND_PORT}
