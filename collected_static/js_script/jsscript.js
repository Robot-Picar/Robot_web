document.addEventListener('DOMContentLoaded', function() {
    // Power Regulator Interactivity
    const powerRegulator = document.getElementById('power-level');
    const powerValue = document.getElementById('power-value');
    
    powerRegulator.addEventListener('input', function(event) {
        powerValue.textContent = `${event.target.value}%`;
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
});

function drawObstacles(ctx) {
    // Example drawing function for obstacles
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas for redrawing
    ctx.fillStyle = '#e74c3c';
    // Imagine an array of obstacles represented as objects with x and y properties
    let obstacles = [{x: 150, y: 75, radius: 10}]; // This should be dynamic
    obstacles.forEach(function(obstacle) {
        ctx.beginPath();
        ctx.arc(obstacle.x, obstacle.y, obstacle.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function applyGrayscale(ctx) {
    // Example grayscale effect
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas for redrawing
    ctx.fillStyle = '#bdc3c7';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function setupArrowButtonInteractivity() {
    // Setup for arrow keys interactivity
    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');

    // Assigning event listeners
    btnUp.addEventListener('click', function() { handleArrowPress('up'); });
    btnDown.addEventListener('click', function() { handleArrowPress('down'); });
    btnLeft.addEventListener('click', function() { handleArrowPress('left'); });
    btnRight.addEventListener('click', function() { handleArrowPress('right'); });
}

function handleArrowPress(direction) {
    // Handle the logic for arrow button press
    console.log(`${direction} pressed`);
    // You would have additional logic here to do something when an arrow key is pressed
}
