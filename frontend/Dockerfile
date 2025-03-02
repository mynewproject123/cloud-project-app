# Use official Node.js image as base
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Install Vite globally
RUN npm install -g create-vite

# Initialize a new Vite project
RUN create-vite react-frontend --template react

# Change directory to the new project
WORKDIR /app/react-frontend

# Install dependencies
RUN npm install
RUN npm install react-router-dom tailwindcss autoprefixer postcss @tailwindcss/postcss --save-dev  

# Copy all project files into the container
COPY . .

# Ensure PostCSS config file is correctly copied
COPY postcss.config.cjs .

# Build the React app
RUN npm run build

# Use an Nginx image to serve the built front-end
FROM nginx:alpine

# Copy the built files f
