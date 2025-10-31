# Stage 1: Build the Vite React app
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the built app using nginx
FROM nginx:alpine

# Copy built files from previous stage to nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
