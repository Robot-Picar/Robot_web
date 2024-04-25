// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Resetting mileage data
    const mileageValue = document.getElementById('mileage-value');
    document.getElementById('btn-reset').addEventListener('click', function() {
        mileageValue.textContent = '0cm';
    });

    // Arrow keys interactivity
    setupArrowButtonInteractivity();
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
