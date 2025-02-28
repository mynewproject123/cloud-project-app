# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app
# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine AS production
# Copy built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
