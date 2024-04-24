document.addEventListener('DOMContentLoaded', function() {
    // Power Regulator Interactivity
    const powerRegulator = document.getElementById('power-level');
    const powerValue = document.getElementById('power-value');
    
    powerRegulator.addEventListener('input', function(event) {
        powerValue.textContent = `${event.target.value}%`;
        updateSpeed(event.target.value); // Linking the power level to speed dynamically
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
    ctx.fillStyle = data.detected ? 'red' : '#e74c3c';  // Change color if detected
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

function updateSpeed(value) {
    const speedValueElement = document.getElementById('speed-value');
    const speedNeedleElement = document.getElementById('speed-needle');
    speedValueElement.textContent = `${value}m/s`;
    let rotationDegrees = (value / 100) * 180; // Calculate the degree of needle rotation
    speedNeedleElement.style.transform = `rotate(${rotationDegrees - 90}deg)`;
}
