// Associative array for images
let images = {
    "birthday": { src: "images/birthday.jpg", title: "Birthday", description: "A person celebrating a birthday." },
    "clown": { src: "images/clown.jpg", title: "Clown", description: "A fun clown performance at the circus." },
    "rain": { src: "images/rain.jpg", title: "Rain", description: "A person holding an umbmrella" },
    "read": { src: "images/read.jpg", title: "Read", description: "A child reading a  good book" },
    "shovel": { src: "images/shovel.jpg", title: "Shovel", description: "Someone holding a shovel." },
    "work": { src: "images/work.jpg", title: "Work", description: "A person working on a computer" }
};

window.onload = () => {
    const imgContainer = document.getElementById('six-imgs');
    const clickText = document.getElementById('click-text');

    // Load images dynamically from the associative array
    Object.keys(images).forEach(key => {
        const imgElement = document.createElement('img');
        imgElement.src = images[key].src;
        imgElement.alt = images[key].title;

        imgElement.addEventListener('click', () => {
            clickText.textContent = images[key].description; // Show description on click
        });

        imgContainer.appendChild(imgElement);
    });
};
