
// ice cream flavors in JSON files
const getFlavors = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showFlavors = async() => {
    const flavors = await getFlavors();

    flavors.forEach((flavor)=>{
        const section = document.createElement("section");
        section.classList.add("flavor");
        document.getElementById("iceCream-section").append(section);

        const img = document.createElement("img");
        img.classList.add("ice-cream");
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${flavor.image}`;
        section.appendChild(img);

        const flavorName = document.createElement("span");
        flavorName.classList.add("flavor-name");
        flavorName.textContent = flavor.name;
        section.appendChild(flavorName);


    });
};

showFlavors();

