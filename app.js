const greetingElement = document.createElement('h2'); // Create the greeting element
greetingElement.classList.add('greeting'); // Add the 'greeting' class for styling

const hours = new Date().getHours(); // Get the current hour
const dayOfWeek = new Date().getDay(); // Get the current day of the week
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let greetingMessage = "";

// Determine the greeting based on the current time
if (hours < 12) {
    greetingMessage = "Good Morning!";
} else if (hours < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

// Set the text content and include the day of the week
greetingElement.textContent = `${greetingMessage} Happy ${weekDays[dayOfWeek]}!`;

// Append the greeting to the intro section
document.querySelector('.intro').appendChild(greetingElement);
// Trigger a timeout to fade in the greeting
setTimeout(() => {
    greetingElement.style.opacity = '1'; // Make it visible with fade-in effect
}, 100); // 100 milliseconds delay for the fade-in effect


// Show the loader on page load
document.getElementById("loader").style.display = "block";

// Simulate loading content with a timeout
window.onload = function() {
    // Simulate a loading time (replace this with your actual loading logic)
    setTimeout(function() {
        // Hide the loader and show the content
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); // Adjust the timeout duration as needed
};
