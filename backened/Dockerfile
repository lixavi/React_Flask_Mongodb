# Use an official Python runtime as the base image
FROM python:latest

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install any needed packages specified in the requirements file
RUN pip install -r requirements.txt

# Copy the rest of the Flask app code to the working directory
COPY . .

# Expose a port for the Flask app to run (usually 5000)
EXPOSE 5000

# Define environment variables, if needed
# ENV VARIABLE_NAME=value

# Start the Flask app
CMD ["python", "app.py"]
