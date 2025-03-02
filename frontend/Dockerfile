# Use official Node.js image as base
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package.json package-lock.json ./

# Install dependencies, including @vitejs/plugin-react
RUN npm install
RUN npm install @vitejs/plugin-react --save-dev  

# Copy all project files
COPY . .

# Ensure postcss.config.cjs is copied
COPY postcss.config.cjs .

# Build the React app
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built frontend from the builder stage
COPY --from=builder /app/dist .

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
