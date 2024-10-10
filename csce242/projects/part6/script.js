document.addEventListener('DOMContentLoaded', () => {
    showDogs();
});

const getDogs = async () => {
    try {
        return (await fetch("https://joshnatkin.github.io/csce242/projects/part6/information.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showDogs = async () => {
    const dogsData = await getDogs();
    const dogs = dogsData.animals;

    dogs.forEach((dog) => {
        const section = document.createElement("section");
        section.classList.add("dog-container");
        section.onclick = () => showDetails(dog);
        document.getElementById("animals").append(section);

        const img = document.createElement("img");
        img.classList.add("dog-img");
        img.src = `dogs/${dog.img_name}`; 
        section.appendChild(img);
        
        // Name
        const dogName = document.createElement("h4");
        dogName.classList.add("dog-h4");
        dogName.textContent = dog.name; 
        section.appendChild(dogName);
        
        // Breed
        const dogBreed = document.createElement("p");
        dogBreed.classList.add("dog-p");
        dogBreed.textContent = dog.breed; 
        section.appendChild(dogBreed);
        
        // Age
        const dogAge = document.createElement("p");
        dogAge.classList.add("dog-p");
        dogAge.textContent = dog.age; 
        section.appendChild(dogAge);
    });
};

// Function to show dog details in expanded section
async function showDetails(selectedDog) {
    const dogDetails = document.getElementById('dog-expanded-section');

    // Clear any previous details
    dogDetails.innerHTML = '';

    // Create a close button
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "x"; // Close button
    closeButton.onclick = () => closeDetails();
    dogDetails.appendChild(closeButton);

    // Add dog details
    const img = document.createElement("img");
    img.classList.add("dog-img");
    img.src = `dogs/${selectedDog.img_name}`; 
    dogDetails.appendChild(img);
    
    // Name
    const dogName = document.createElement("h4");
    dogName.classList.add("dog-h4");
    dogName.textContent = selectedDog.name; 
    dogDetails.appendChild(dogName);
    
    // Breed
    const dogBreed = document.createElement("p");
    dogBreed.classList.add("dog-p");
    dogBreed.textContent = `Breed: ${selectedDog.breed}`; 
    dogDetails.appendChild(dogBreed);
    
    // Age
    const dogAge = document.createElement("p");
    dogAge.classList.add("dog-p");
    dogAge.textContent = `Age: ${selectedDog.age}`; 
    dogDetails.appendChild(dogAge);

    // Features
    const dogFeatures = document.createElement("p");
    dogFeatures.classList.add("dog-p");
    dogFeatures.textContent = `Some Characteristic Traits: ${selectedDog.features.join(', ')}`; 
    dogDetails.appendChild(dogFeatures);

    // Vaccinated status
    const dogVac = document.createElement("p");
    dogVac.classList.add("dog-p");
    dogVac.textContent = `Is ${selectedDog.name} Vaccinated: ${selectedDog.vaccinated ? 'Yes' : 'No'}`; 
    dogDetails.appendChild(dogVac);

    // Gender
    const gender = document.createElement("p");
    gender.classList.add("dog-p");
    gender.textContent = `Dog's Gender: ${selectedDog.gender}`; 
    dogDetails.appendChild(gender);

    // Show the expanded section
    dogDetails.style.display = 'flex';
}

// Function to close the details
function closeDetails() {
    const dogDetails = document.getElementById('dog-expanded-section');
    dogDetails.style.display = 'none'; // Hide the expanded section
}
