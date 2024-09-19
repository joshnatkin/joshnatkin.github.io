/*When hamburger is clicked, toggle between showing
and hiding the nav items */

document.querySelector("#toggle-nav").onclick = () => { //thish function is the event handleer(what hapeens when button is clicked)
    document.getElementById("nav-items").classList.toggle("hidden-small");

};d

/*dont go to link destination when clicked*/ 

document.getElementById("click-link").onclick = () => {
    event.preventDefault(); // dont go to the links destination
    console.log("i hate asians");
};
/*Change ball color */
document.getElementById("txt-color").onchange = (e) => {
    //document.getElementById("ball").style.setProperty("background-color", e.target.value)
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value)
};

let pos = 0;
document.getElementById("move-down").onclick =() => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}
