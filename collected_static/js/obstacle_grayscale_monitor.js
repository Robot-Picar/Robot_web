// obstacle_grayscale_monitor.js
document.addEventListener('DOMContentLoaded', function() {
    const obstacleCtx = document.getElementById('obstacle-canvas').getContext('2d');
    const grayscaleCtx = document.getElementById('grayscale-canvas').getContext('2d');
    
    // Assuming obstacleData and grayscaleData are defined or fetched elsewhere in your project
    drawObstacles(obstacleCtx, obstacleData);
    applyGrayscale(grayscaleCtx, grayscaleData);
});

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
