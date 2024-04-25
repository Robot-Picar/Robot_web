// power_regulator.js
document.addEventListener('DOMContentLoaded', function() {
    const batteryRegulator = document.getElementById('battery-level');
    const batteryValue = document.getElementById('battery-value');
    
    batteryRegulator.addEventListener('input', function(event) {
        batteryValue.textContent = `${event.target.value}%`;
        updateBatteryDisplay(event.target.value);
    });
});

function updateBatteryDisplay(value) {
    const batteryIndicator = document.getElementById('battery-indicator');
    let batteryHeight = (value / 100) * 100;
    batteryIndicator.style.height = `${batteryHeight}%`;
    batteryIndicator.textContent = `${value}% Battery`;
}
