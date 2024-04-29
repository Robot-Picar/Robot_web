// Establish a WebSocket connection to the server
var websocket;

document.addEventListener('DOMContentLoaded', function() {
    // Open a WebSocket within the same host
    websocket = new WebSocket('ws://' + window.location.host + '/ws/control/');

    // Event listener for when a message is received from the server
    websocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log('Command status: ', data);
    };

    // Error handling for the WebSocket connection
    websocket.onerror = function(e) {
        console.error('WebSocket error:', e);
    };

    // Set up the arrow key interactivity
    setupArrowButtonInteractivity();
});

// Set up event listeners for arrow button clicks to control the robot
function setupArrowButtonInteractivity() {
    const controlButtons = document.querySelectorAll('.arrow-keys button');
    controlButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retrieve the command from the data-command attribute
            const command = this.getAttribute('data-command');
            // Send the command as a JSON string through the WebSocket
            websocket.send(JSON.stringify({'command': command}));
        });
    });
}
