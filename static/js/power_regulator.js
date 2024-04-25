// power_regulator.js

document.addEventListener('DOMContentLoaded', function() {
    const batteryLevel = document.getElementById('battery-level');
    const powerValue = document.getElementById('power-value'); // Ensures this element exists in HTML
    
    batteryLevel.addEventListener('input', function(event) {
        powerValue.textContent = `${event.target.value}%`;
        updateBatteryDisplay(event.target.value);
    });
});

function updateBatteryDisplay(value) {
    const batteryIndicator = document.getElementById('battery-indicator');
    if (batteryIndicator) { // Check if the element exists
        let batteryHeight = value; // Simplified, assuming you want to set the height directly
        batteryIndicator.style.height = `${batteryHeight}%`;
        batteryIndicator.textContent = `${value}% Battery`;
    }
}
