class Bird {
    constructor(name, species, color, size, habitat, diet, behavior, imageFileName) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.size = size;
        this.habitat = habitat;
        this.diet = diet;
        this.behavior = behavior;
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
            <p><strong>Diet:</strong> ${this.diet}</p>
            <p><strong>Behavior:</strong> ${this.behavior}</p>
        `;
        birdDetails.style.display = 'flex'; // Show details in flex layout
    }
}

// Array of birds with seven character traits each
const birds = [];
birds.push(new Bird('Mockingbird', 'Mimus polyglottos', 'Gray', 'Medium', 'Urban and suburban areas', 'Insects and fruits', 'Mimics sounds', 'mockingbird.png'));
birds.push(new Bird('Eagle', 'Haliaeetus leucocephalus', 'Dark brown and white', 'Large', 'Mountains and forests', 'Fish and small mammals', 'Strong vision', 'eagle.png'));
birds.push(new Bird('Cardinal', 'Cardinalis cardinalis', 'Red', 'Small', 'Woodlands and gardens', 'Seeds and insects', 'Territorial', 'cardinal.png'));
birds.push(new Bird('Blue Jay', 'Cyanocitta cristata', 'Blue', 'Medium', 'Forests and urban areas', 'Nuts, seeds, and insects', 'Aggressive', 'bluejay.png'));

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
