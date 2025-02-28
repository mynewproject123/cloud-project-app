# Use an official Node.js image as the base
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Initialize package.json
RUN npm init -y

# Install necessary React dependencies
RUN npm install react react-dom react-scripts

# Add start and build scripts to package.json
RUN sed -i 's/"scripts": {/"scripts": {"start": "react-scripts start", "build": "react-scripts build",/' package.json

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy the build output to Nginx's web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
