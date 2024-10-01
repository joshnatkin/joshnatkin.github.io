// Get elements
const drawButton = document.getElementById("draw-button");
const starsInput = document.getElementById("stars");
const grid = document.getElementById("grid");
const errorMessage = document.querySelector(".error-message");

// Function to clear previous stars
const clearStars = () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
};

// Function to draw stars
const drawStars = (numStars) => {
    clearStars(); // Clear previous stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        // Random position within the grid
        const x = Math.random() * (grid.clientWidth - 20); // 20 is star size
        const y = Math.random() * (grid.clientHeight - 20);
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Add click event to the star
        star.addEventListener("click", () => {
            alert(`You clicked on star number ${i + 1}`);
        });

        grid.appendChild(star);
    }
};

// Function to handle draw button click
drawButton.addEventListener("click", () => {
    const numStars = parseInt(starsInput.value);

    if (isNaN(numStars) || numStars <= 0) {
        errorMessage.textContent = "Please enter a valid number of stars.";
        errorMessage.style.display = "block"; // Show error message
    } else {
        errorMessage.style.display = "none"; // Hide error message
        drawStars(numStars); // Draw the stars
    }
});
