var textBox = document.getElementById('myTextBox');

// Attach the event listener to the 'onselect' event
textBox.onselect = function() {
  // Check if any text is selected
  if (window.getSelection().toString().length > 0) {
    // Display an alert message
    alert('You selected some text');
  }
};