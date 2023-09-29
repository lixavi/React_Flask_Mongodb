# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining app files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port for the React app to run (usually 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
