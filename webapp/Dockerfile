# Specify the base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

RUN npm install -g @angular/cli@15.0.3 

# Copy the source code to the container
COPY . .

# Expose the port used by the application
EXPOSE 4200

# Start the application
CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]

