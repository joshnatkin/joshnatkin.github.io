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

