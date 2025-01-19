# Use Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 3001 for Next.js development server
EXPOSE 3001

# Start the development server with hot reloading
CMD ["npm", "run", "dev", '-p', '3001']
