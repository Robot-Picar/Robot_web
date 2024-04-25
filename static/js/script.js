// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Resetting mileage data
    const mileageValue = document.getElementById('mileage-value');
    document.getElementById('btn-reset').addEventListener('click', function() {
        mileageValue.textContent = '0cm';
    });

    // Arrow keys interactivity
    setupArrowButtonInteractivity();

    // Additional functionality for new menu panel buttons
    document.getElementById('btn-camera').addEventListener('click', () => toggleFunctionality('Camera'));
    document.getElementById('btn-ultrasonic').addEventListener('click', () => toggleObstacleMonitor());
    document.getElementById('btn-grayscale').addEventListener('click', () => toggleGrayscaleMonitor());
    document.getElementById('btn-avoid').addEventListener('click', () => toggleFunctionality('Avoid'));
    document.getElementById('btn-follow').addEventListener('click', () => toggleFunctionality('Follow'));
    document.getElementById('btn-cliff').addEventListener('click', () => toggleFunctionality('Cliff'));
    document.getElementById('btn-path').addEventListener('click', () => toggleFunctionality('Path'));
    
});

function setupArrowButtonInteractivity() {
    ['btn-up', 'btn-down', 'btn-left', 'btn-right'].forEach(buttonId => {
        document.getElementById(buttonId).addEventListener('click', () => handleArrowPress(buttonId.replace('btn-', '')));
    });
}

function handleArrowPress(direction) {
    console.log(`${direction} pressed`);
    // Add further functionality if needed
}

function toggleFunctionality(feature) {
    console.log(`Toggling ${feature}`);
    // Additional logic can be implemented here
}

function toggleObstacleMonitor() {
    const obstacleCanvas = document.getElementById('obstacle-canvas');
    obstacleCanvas.style.display = (obstacleCanvas.style.display === 'none') ? 'block' : 'none';
}

function toggleGrayscaleMonitor() {
    const grayscaleCanvas = document.getElementById('grayscale-canvas');
    grayscaleCanvas.style.display = (grayscaleCanvas.style.display === 'none') ? 'block' : 'none';
}
