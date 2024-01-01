# Use an official Node.js LTS (Long Term Support) image
FROM node:18.13.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your app will run on
EXPOSE 3001

# Start the application using nodemon for development
CMD ["npm","start"]
