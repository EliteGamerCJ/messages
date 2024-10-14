// Getting references to DOM elements
const messagesContainer = document.getElementById('messages-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim(); // Get the message text and trim whitespace

    if (messageText !== '') {
        // Create a message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerText = messageText;

        // Append the message to the messages container
        messagesContainer.appendChild(messageElement);

        // Scroll to the bottom of the chat
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }
}

// Send message when the button is clicked
sendButton.addEventListener('click', sendMessage);

// Send message when the Enter key is pressed
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
