from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
import os
import requests

def send_command_to_pi(command):
    url = 'http://RASPBERRY_PI_IP:5000/command'
    data = {'command': command}
    response = requests.post(url, json=data)
    return response.json()

def dashboard(request):
    # Fetches data to be displayed on the dashboard. Here, 'request' might be used
    # in the future to handle different methods (GET, POST) or to access session
    # or user data, hence why it's important to include it even if not used.
    obstacle_data = {"detected": True, "x": 100, "y": 50, "radius": 10}
    grayscale_data = {"blackLineDetected": True, "cliffDetected": False}
    context = {
        'obstacle_data': obstacle_data,
        'grayscale_data': grayscale_data
    }
    return render(request, 'myapp/dashboard.html', context)

def control_robot(request, command):
    # Here 'request' is part of the function's signature as required by Django.
    # It's included to allow for future enhancements such as checking if the request
    # is a POST request, logging the user who sent the command, or other request-specific data.
    command_file = settings.COMMAND_FILE_PATH

    # Write the command received in the URL to the command file.
    with open(command_file, 'w') as file:
        file.write(command)

    # Respond back with JSON indicating success and the command passed.
    return JsonResponse({'status': 'success', 'command': command})
