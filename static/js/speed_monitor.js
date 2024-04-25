// speed_monitor.js
document.addEventListener('DOMContentLoaded', function() {
    const speedRegulator = document.getElementById('speed-level');
    const speedValue = document.getElementById('speed-value');

    speedRegulator.addEventListener('input', function(event) {
        speedValue.textContent = `${event.target.value}m/s`;
        updateSpeedNeedle(event.target.value);
    });
});

function updateSpeedNeedle(value) {
    const speedNeedle = document.getElementById('speed-needle');
    let rotationDegrees = (value / 100) * 180;
    speedNeedle.style.transform = `rotate(${rotationDegrees - 90}deg)`;
}
