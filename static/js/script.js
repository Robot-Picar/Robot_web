// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date and time display
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update the time every second

    // Resetting mileage data
    const mileageValue = document.getElementById('mileage-value');
    document.getElementById('btn-reset').addEventListener('click', function() {
        mileageValue.textContent = '0cm';
    });

    // Setup buttons for various functionalities
    document.getElementById('btn-camera').addEventListener('click', () => toggleFunctionality('Camera'));
    document.getElementById('btn-avoid').addEventListener('click', () => toggleFunctionality('Avoid'));
    document.getElementById('btn-follow').addEventListener('click', () => toggleFunctionality('Follow'));
    document.getElementById('btn-cliff').addEventListener('click', () => toggleFunctionality('Cliff'));
    document.getElementById('btn-path').addEventListener('click', () => toggleFunctionality('Path'));
});

function handleArrowPress(direction) {
    console.log(`${direction} pressed`);
    // Integrate actual navigation or other interactions as needed
}

function toggleFunctionality(feature) {
    console.log(`Toggling ${feature}`);
    // Implement specific toggling logic here, potentially involving AJAX requests or updates to UI components
}

function updateDateTime() {
    const now = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
    document.getElementById('date-time').textContent = dateTimeFormat.format(now);
}
