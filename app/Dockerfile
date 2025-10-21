# Use lightweight Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app port
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]
