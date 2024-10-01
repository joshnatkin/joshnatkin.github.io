/*
*Change which image currently has the class of hidden applied to it
*/


const slide = () => {
  const currentImage =  document.querySelector("#slideshow :not(.hidden)");
  let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#slideshow :first-child")
    }

    currentImage.classList.add("hidden")
    nextImage.classList.remove("hidden")

};

setInterval(slide, 1000);