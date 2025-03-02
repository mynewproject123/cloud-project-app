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
RUN npm install react-router-dom tailwindcss autoprefixer postcss @tailwindcss/postcss react-hot-toast --save-dev  # ✅ Fix: Install missing package

# Copy source code and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built frontend from the builder stage
COPY --from=builder /app/react-frontend/dist .

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
