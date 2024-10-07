class Bird {
    constructor(name, species, color, size, habitat, imageFileName) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.size = size;
        this.habitat = habitat;
        this.imageFileName = imageFileName;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("bird");
        section.onclick = () => this.showDetails();

        // Create header for bird name
        const h3 = document.createElement("h3");
        h3.textContent = this.name;
        section.append(h3);

        // Create image
        section.append(this.picture(this.imageFileName));
        return section;
    }

    // Method to show image
    picture(info) {
        const img = document.createElement("img");
        img.src = "images/" + info;  // Ensure images are in the correct folder
        img.alt = this.name;
        return img;
    }

    // Method to display bird details directly on the page
    showDetails() {
        const birdDetails = document.getElementById('bird-details');
        birdDetails.innerHTML = `
            <div class="close-btn" onclick="closeDetails()">×</div>
            <h3>${this.name}</h3>
            <img src="images/${this.imageFileName}" alt="${this.name}">
            <p><strong>Species:</strong> ${this.species}</p>
            <p><strong>Color:</strong> ${this.color}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
        `;
        birdDetails.style.display = 'flex'; // Show details in flex layout
    }
}

// Array of birds
const birds = [];
birds.push(new Bird('Sparrow', 'Passeridae', 'Brown', 'Small', 'Urban areas', 'mockingbird.png'));
birds.push(new Bird('Parrot', 'Psittacidae', 'Green', 'Medium', 'Tropical forests', 'cardinal.png'));
birds.push(new Bird('Eagle', 'Accipitridae', 'Dark brown', 'Large', 'Mountains and forests', 'eagle.png'));
birds.push(new Bird('Peacock', 'Pavo cristatus', 'Blue and green', 'Large', 'Grasslands and forests', 'bluejay.png'));

// Display birds on page load
const birdList = document.getElementById('bird-list');
birds.forEach(bird => {
    birdList.append(bird.item);
});

// Function to close the details
function closeDetails() {
    const birdDetails = document.getElementById('bird-details');
    birdDetails.style.display = 'none'; // Hide the details
}
