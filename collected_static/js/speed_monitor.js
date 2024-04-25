// speed_monitor.js
document.addEventListener('DOMContentLoaded', function() {
    const speedRegulator = document.getElementById('speed-level'); // Ensure you have this element in your HTML
    const speedValue = document.getElementById('speed-value');
    const maxSpeed = 100; // Set this to your max speed

    // Initial update based on the default value
    updateSpeedNeedle(speedRegulator.value, maxSpeed);

    speedRegulator.addEventListener('input', function(event) {
        const speed = event.target.value;
        speedValue.textContent = `${speed}m/s`;
        updateSpeedNeedle(speed, maxSpeed);
    });
});

function updateSpeedNeedle(value, maxSpeed) {
    const speedNeedle = document.getElementById('speed-needle');
    // Map the speed value to the angle range -90 to 90 degrees
    let rotationDegrees = mapRange(value, 0, maxSpeed, -90, 90);
    speedNeedle.style.transform = `rotate(${rotationDegrees}deg)`;
}

// Utility function to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin;
}
