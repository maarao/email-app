#!/bin/bash

# Clean up old/dangling images first
docker image prune -f  # -f means don't ask for confirmation

# Start containers
docker compose up --build --watch --remove-orphans
