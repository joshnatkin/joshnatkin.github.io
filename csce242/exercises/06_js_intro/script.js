const doStuff = () =>{
    alert("hello");
};

const myButton = document.getElementById("dissapear");
//myButton.onclick = doStuff;

// myButton.onclick = () => {
//     document.getElementById("message").innerHTML = "Hello Everyone";
//     document.getElementById("stuff").classList.add("special");
// };

myButton.onclick = () => {
    document.getElementById("ss").innerHTML = ("go away");
    document.getElementById("more").classList.add("hide");
};

//Showing data from an input field
document.getElementById("txt-first-name").onkeyup = () => {
    const textBox =document.getElementById("text-first-name");
    console.log("result").innerHTML = textBox.value;
}

