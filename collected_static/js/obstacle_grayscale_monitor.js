// obstacle_grayscale_monitor.js
document.addEventListener('DOMContentLoaded', function() {
    const obstacleCtx = document.getElementById('obstacle-canvas').getContext('2d');
    const grayscaleCtx = document.getElementById('grayscale-canvas').getContext('2d');

    // State variables to track whether monitors are active
    let obstacleMonitorActive = false;
    let grayscaleMonitorActive = false;

    // Attach event listeners to toggle buttons
    document.getElementById('btn-toggle-ultrasonic').addEventListener('click', function() {
        obstacleMonitorActive = !obstacleMonitorActive;  // Toggle the active state
        updateCanvasDisplay(obstacleCtx, obstacleMonitorActive, drawObstacles);
    });

    document.getElementById('btn-toggle-grayscale').addEventListener('click', function() {
        grayscaleMonitorActive = !grayscaleMonitorActive;  // Toggle the active state
        updateCanvasDisplay(grayscaleCtx, grayscaleMonitorActive, applyGrayscale);
    });
});

function updateCanvasDisplay(ctx, isActive, renderFunction) {
    ctx.canvas.style.display = isActive ? 'block' : 'none';  // Toggle display based on state
    if (isActive) {
        renderFunction(ctx);
    } else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);  // Clear the canvas when deactivated
    }
}

function drawObstacles(ctx) {
    // Clears the canvas before drawing
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Example function that draws an obstacle
    ctx.fillStyle = 'red';  // Change to red when obstacles are detected (example)
    ctx.beginPath();
    ctx.arc(250, 100, 30, 0, 2 * Math.PI);  // Draw a circle at (250, 100) with radius 30
    ctx.fill();
}

function applyGrayscale(ctx) {
    // Clears the canvas before applying grayscale
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Example function that applies grayscale
    ctx.fillStyle = 'black';  // Simulating a detected black line
    ctx.beginPath();
    ctx.fillRect(100, 50, 300, 100);  // Draw a black rectangle (example)
}
