# Use official Node.js image as base
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Install Vite globally (if package.json is missing)
RUN npm install -g create-vite

# Initialize a new Vite project
RUN create-vite react-frontend --template react

# Change directory to the new project
WORKDIR /app/react-frontend

# Install dependencies
RUN npm install
RUN npm install react-router-dom  # <--- Ensures react-router-dom is installed

# Copy all files
COPY . .

# Build the React app
RUN npm run build
