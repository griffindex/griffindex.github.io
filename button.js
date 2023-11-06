// Get references to the button and counter element
const incrementButton = document.getElementById("incrementButton");
const counter = document.getElementById("counter");

// Initialize the count
let count = 0;

// Add a click event listener to the button
incrementButton.addEventListener("click", function () {
  // Increment the count
  count++;

  // Update the counter text
  counter.textContent = count;
});
