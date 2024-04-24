from django.shortcuts import render

def dashboard(request):
    # Example data fetching logic
    obstacle_data = {"detected": True, "x": 100, "y": 50, "radius": 10}
    grayscale_data = {"blackLineDetected": True, "cliffDetected": False}
    context = {
        'obstacle_data': obstacle_data,
        'grayscale_data': grayscale_data
    }
    return render(request, 'myapp/dashboard.html', context)

