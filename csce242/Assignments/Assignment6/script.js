document.getElementById("slider").oninput = (e) => {
    let value = e.target.value;
    const red = value;
    const color = `rgb(${red}, 0, 0)`;
    const message = document.getElementById("color-message");
    document.getElementById('color-slider').style.backgroundColor = color;

    if(value < 85){
        message.innerHTML = "light";
    }
    else if(value<170 ){
        message.innerHTML= "Medium"
    }
    else{
        message.innerHTML= "Dark"
    }
    
};

// Show Picture Function
function showPicture(size) {
    let width, height;

    if (size === 'small') {
        width = 100;
        height = 100;
    } else if (size === 'medium') {
        width = 300;
        height = 300;
    } else if (size === 'large') {
        width = 500;
        height = 500;
    } else {
        width = 600;
        height = 400;
    }

    const picture = document.getElementById("picture");
    picture.style.width = width + "px";
    picture.style.height = height + "px";
    picture.src = `https://picsum.photos/${width}/${height}`;
}

// Event listeners for the picture size buttons
document.querySelectorAll('#sizer button').forEach(button => {
    button.addEventListener('click', (e) => showPicture(e.target.getAttribute('data-size')));
});

// Event listeners to toggle sections
document.getElementById("exercise1-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("color-slider").style.display = "block";
    document.getElementById("sizer").style.display = "none";
});

document.getElementById("exercise2-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("color-slider").style.display = "none";
    document.getElementById("sizer").style.display = "block";
});
