# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
RUN npm install -g create-vite
RUN create-vite react-frontend --template react
WORKDIR /app/react-frontend

# Install necessary packages
RUN npm install
RUN npm install react-router-dom tailwindcss autoprefixer postcss @tailwindcss/postcss --save-dev

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
