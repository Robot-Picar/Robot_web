// location.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-location').addEventListener('click', function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(displayLocation, handleLocationError, {timeout: 10000});
        } else {
            updateLocationInfo('Geolocation is not supported by your browser. Please check your browser settings.');
        }
    });
});

function displayLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    updateLocationInfo(`Latitude: ${lat}, Longitude: ${lon}`);
}

function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            updateLocationInfo('Location permission was denied. Please enable it in your browser settings to use this feature.');
            break;
        case error.POSITION_UNAVAILABLE:
            updateLocationInfo('Location information is currently unavailable. Please check your network or GPS settings.');
            break;
        case error.TIMEOUT:
            updateLocationInfo('The request to get location timed out. Please try again.');
            break;
        default:
            updateLocationInfo('An unknown error occurred while retrieving location.');
            break;
    }
    console.error("Error Code = " + error.code + " - " + error.message);
}

function updateLocationInfo(message) {
    document.getElementById('location-info').textContent = message;
}
