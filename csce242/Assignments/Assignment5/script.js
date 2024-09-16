let count= 0;

//count column
const countBox = document.getElementById('count');
const countDisplay = document.getElementById('click-count');

countBox.onclick = () => {
    count++; 
    countDisplay.innerHTML = count; 
};

//img refresher
const imgRefresher = document.getElementById('rand-img');

imgRefresher.onclick = () => {
    location.reload();
}

//slider
const slider = document.getElementById('slider');
const square = document.getElementById('square');

slider.addEventListener('input', () => {
    const sliderValue = slider.value;
    const maxSliderValue = slider.max;
    
    const maxPosition = 100 - (square.offsetWidth / document.getElementById('slida').offsetWidth * 100);
    const position = Math.min(sliderValue, maxSliderValue * maxPosition / 100);
    square.style.left = position + '%';
});