// Function to fetch margarita recipes from a JSON file or API
const getMargaritas = async () => {
    try {
        // Replace with the correct URL if fetching from an API or a local JSON file
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'); 
        return await response.json();
    } catch (error) {
        console.log("Error fetching margarita recipes:", error);
    }
}

// Function to display margarita recipes on the webpage
const showMargaritas = async () => {
    const margaritasData = await getMargaritas();

    // Assume margaritasData.drinks is the array of margaritas
    margaritasData.drinks.forEach((drink) => {
        const section = document.createElement("section");
        section.classList.add("margarita");
        document.getElementById("margaritas-section").append(section);

        // Create the heading with drink name
        const h3 = document.createElement("h3");
        h3.innerHTML = drink.strDrink;
        section.append(h3);

        // Drink image
        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;
        img.alt = drink.strDrink;
        section.append(img);

        // Drink ingredients
        const ingredients = document.createElement("p");
        ingredients.innerHTML = `Ingredients: ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}`;
        section.append(ingredients);

        // Drink instructions
        const instructions = document.createElement("p");
        instructions.innerHTML = getIngredients(recipe);
        section.append(instructions);

        
    });
}

// Call the function to show margaritas on the webpage
showMargaritas();
