document.addEventListener('DOMContentLoaded', function() {
    // Power Regulator Interactivity
    const powerRegulator = document.getElementById('power-level');
    const powerValue = document.getElementById('power-value');
    
    powerRegulator.addEventListener('input', function(event) {
        powerValue.textContent = `${event.target.value}%`;
        updateSpeed(event.target.value); // Call updateSpeed if you want to link the power level to speed
    });

    // Canvas Drawing
    const obstacleCanvas = document.getElementById('obstacle-canvas');
    const obstacleCtx = obstacleCanvas.getContext('2d');
    const grayscaleCanvas = document.getElementById('grayscale-canvas');
    const grayscaleCtx = grayscaleCanvas.getContext('2d');

    // Draw on Canvas
    drawObstacles(obstacleCtx);
    applyGrayscale(grayscaleCtx);

    // Mileage Reset Button
    const mileageValue = document.getElementById('mileage-value');
    document.getElementById('btn-reset').addEventListener('click', function() {
        mileageValue.textContent = '0cm';
    });

    // Arrow Key Button Functionality
    setupArrowButtonInteractivity();

    // Location Button Functionality
    document.getElementById('btn-location').addEventListener('click', function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById('location-info').textContent = `Latitude: ${lat}, Longitude: ${lon}`;
            }, function(error) {
                document.getElementById('location-info').textContent = 'Unable to retrieve location.';
                console.error("Error Code = " + error.code + " - " + error.message);
            });
        } else {
            document.getElementById('location-info').textContent = 'Geolocation is not supported by your browser.';
        }
    });
});

function drawObstacles(ctx) {
    console.log("Drawing obstacles...");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#e74c3c';
    let obstacles = [{x: 150, y: 75, radius: 10}];
    obstacles.forEach(function(obstacle) {
        ctx.beginPath();
        ctx.arc(obstacle.x, obstacle.y, obstacle.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function applyGrayscale(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#bdc3c7';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function setupArrowButtonInteractivity() {
    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');

    btnUp.addEventListener('click', function() { handleArrowPress('up'); });
    btnDown.addEventListener('click', function() { handleArrowPress('down'); });
    btnLeft.addEventListener('click', function() { handleArrowPress('left'); });
    btnRight.addEventListener('click', function() { handleArrowPress('right'); });
}

function handleArrowPress(direction) {
    console.log(`${direction} pressed`);
}

function updateSpeed(value) {
    const speedValueElement = document.getElementById('speed-value');
    const speedNeedleElement = document.getElementById('speed-needle');
    
    speedValueElement.textContent = `${value}m/s`;
    let rotationDegrees = (value / 100) * 180; // Assuming the power-level range represents speed
    speedNeedleElement.style.transform = `rotate(${rotationDegrees - 90}deg)`;
}
