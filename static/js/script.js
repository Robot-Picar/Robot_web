document.addEventListener('DOMContentLoaded', function() {
    // Power Regulator Interactivity for Battery Level
    const batteryRegulator = document.getElementById('battery-level');
    const batteryValue = document.getElementById('battery-value');
    
    batteryRegulator.addEventListener('input', function(event) {
        batteryValue.textContent = `${event.target.value}%`;
        updateBatteryDisplay(event.target.value);
    });

    // Speed Monitor Interactivity for Real-Time Speed
    const speedRegulator = document.getElementById('speed-level');
    const speedValue = document.getElementById('speed-value');

    speedRegulator.addEventListener('input', function(event) {
        speedValue.textContent = `${event.target.value}m/s`;
        updateSpeedNeedle(event.target.value);
    });

    // Canvas Drawing for obstacle and grayscale
    const obstacleCtx = document.getElementById('obstacle-canvas').getContext('2d');
    const grayscaleCtx = document.getElementById('grayscale-canvas').getContext('2d');
    
    // Assuming obstacleData and grayscaleData are defined or fetched elsewhere in your project
    drawObstacles(obstacleCtx, obstacleData);
    applyGrayscale(grayscaleCtx, grayscaleData);

    // Resetting mileage data
    const mileageValue = document.getElementById('mileage-value');
    document.getElementById('btn-reset').addEventListener('click', function() {
        mileageValue.textContent = '0cm';
    });

    // Arrow keys interactivity
    setupArrowButtonInteractivity();

    // Enhancing location retrieval with user guidance and error handling
    document.getElementById('btn-location').addEventListener('click', function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(displayLocation, handleLocationError, {timeout: 10000});
        } else {
            updateLocationInfo('Geolocation is not supported by your browser. Please check your browser settings.');
        }
    });
});

function displayLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    updateLocationInfo(`Latitude: ${lat}, Longitude: ${lon}`);
}

function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            updateLocationInfo('Location permission was denied. Please enable it in your browser settings to use this feature.');
            break;
        case error.POSITION_UNAVAILABLE:
            updateLocationInfo('Location information is currently unavailable. Please check your network or GPS settings.');
            break;
        case error.TIMEOUT:
            updateLocationInfo('The request to get location timed out. Please try again.');
            break;
        default:
            updateLocationInfo('An unknown error occurred while retrieving location.');
            break;
    }
    console.error("Error Code = " + error.code + " - " + error.message);
}

function updateLocationInfo(message) {
    document.getElementById('location-info').textContent = message;
}

function drawObstacles(ctx, data) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = data.detected ? 'red' : '#e74c3c';
    ctx.beginPath();
    ctx.arc(data.x, data.y, data.radius, 0, Math.PI * 2);
    ctx.fill();
}

function applyGrayscale(ctx, data) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = data.blackLineDetected ? 'black' : (data.cliffDetected ? 'grey' : 'white');
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function setupArrowButtonInteractivity() {
    ['btn-up', 'btn-down', 'btn-left', 'btn-right'].forEach(buttonId => {
        document.getElementById(buttonId).addEventListener('click', () => handleArrowPress(buttonId.replace('btn-', '')));
    });
}

function handleArrowPress(direction) {
    console.log(`${direction} pressed`);
    // Add further functionality if needed
}

function updateBatteryDisplay(value) {
    const batteryIndicator = document.getElementById('battery-indicator');
    let batteryHeight = (value / 100) * 100;
    batteryIndicator.style.height = `${batteryHeight}%`;
    batteryIndicator.textContent = `${value}% Battery`;
}

function updateSpeedNeedle(value) {
    const speedNeedle = document.getElementById('speed-needle');
    let rotationDegrees = (value / 100) * 180;
    speedNeedle.style.transform = `rotate(${rotationDegrees - 90}deg)`;
}
