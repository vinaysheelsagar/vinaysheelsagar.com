FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files first (to leverage Docker caching)
COPY ./app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files (including tsconfig.json and source files)
COPY ./app/ ./

# Expose the port for the app
EXPOSE 5173

# Run the build command
RUN npm run build

# Production stage: smaller and optimized image
FROM node:18-slim AS production

# Install serve globally to serve the static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port to serve the app
EXPOSE 5173

# Run the app with serve
CMD ["serve", "-s", "dist", "-l", "0.0.0.0:5173"]
