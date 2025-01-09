// Initialize the counter variable
let count = 0;

// Select the element that displays the counter value
const value = document.querySelector("#value");

// Select all buttons with the class "btn"
const btns = document.querySelectorAll(".btn");

// Add event listeners to each button
btns.forEach(btn => { // Loop through each button
    btn.addEventListener("click", e => { // Listen for a "click" event
        // Get the `id` of the button that was clicked
        let elementId = e.currentTarget.id;

        // Check which button was clicked and update the count accordingly
        if (elementId == 'decrease') {
            count--; // Decrease the count
        } else if (elementId == 'reset') {
            count = 0; // Reset the count to 0
        } else {
            count++; // Increase the count
        }

        // Update the displayed counter value
        value.textContent = count;

        // Change the color of the counter value based on its value
        value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#007bff";
        // If count > 0, color is green
        // If count < 0, color is red
        // If count == 0, color is blue (#007bff)
    });
});
