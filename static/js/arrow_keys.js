var websocket;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize a WebSocket connection to the Django server
    websocket = new WebSocket('ws://' + window.location.host + '/ws/control/');

    // Define what happens when a message is received from the server
    websocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log('Command status: ', data);
    };

    // Handle any errors that occur with the WebSocket connection
    websocket.onerror = function(e) {
        console.error('WebSocket error:', e);
    };

    // Listen for keydown events on the entire document to capture arrow key presses
    document.addEventListener('keydown', function(event) {
        handleKeyPress(event.key);
    });
});

// This function maps key presses to specific robot commands and sends them over the WebSocket
function handleKeyPress(key) {
    let command = null;
    switch(key) {
        case 'ArrowUp':    // Arrow Up key for moving forward
            command = 'forward';
            break;
        case 'ArrowDown':  // Arrow Down key for moving backward
            command = 'backward';
            break;
        case 'ArrowLeft':  // Arrow Left key for turning left
            command = 'turn_left';
            break;
        case 'ArrowRight': // Arrow Right key for turning right
            command = 'turn_right';
            break;
        default:
            return; // If any other key is pressed, ignore it
    }
    // If a valid command is determined, send it as a JSON string through the WebSocket
    if (command) {
        websocket.send(JSON.stringify({'command': command}));
    }
}
