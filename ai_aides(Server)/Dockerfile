# Use a Python base image
FROM python:3.10-alpine

# Install Flask and other required packages
RUN pip install flask revChatGPT Flask-APScheduler -i https://pypi.tuna.tsinghua.edu.cn/simple

# Copy the application code to the container
COPY . /app

# Set the working directory to the application code
WORKDIR /app

# Start the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]

