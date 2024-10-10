//Hamburger
document.querySelector("#toggle-nav").addEventListener('click', (event) => {
    event.preventDefault();
    const navItems = document.querySelector("#nav-items");
    navItems.classList.toggle("show");
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

    dogs.forEach((dog)=>{
        
        const section = document.createElement("section");
        section.classList.add("dog-container");
        document.getElementById("animals").append(section);

        const img = document.createElement("img");
        img.classList.add("dog-img");
        img.src = `dogs/`+dog.img_name; 
        section.appendChild(img);
        
        //Name
        const dogName = document.createElement("h4");
        dogName.classList.add("dog-h4");
        dogName.textContent = dog.name; 
        section.appendChild(dogName);
        
        //breed
        const dogBreed = document.createElement("p");
        dogBreed.classList.add("dog-p");
        dogBreed.textContent = dog.breed; 
        section.appendChild(dogBreed);
        
        //age
        const dogAge = document.createElement("p");
        dogAge.classList.add("dog-p");
        dogAge.textContent = dog.age; 
        section.appendChild(dogAge);
    });
};

showDogs();
