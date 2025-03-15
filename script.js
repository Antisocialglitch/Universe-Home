const trial =
document.querySelector('h1') 
// trial.innerText = "ONE MORE TIME"
//trial.style.color = '#22663a'
const firstImg = document.querySelector("img")
firstImg.style.width ="350px"

const sum = 0
document.getElementById("guestAmount").onclick = function (){
    sum++
}

document.getElementById("mButton").onclick = function(){
    document.getElementById("text").innerHTML = "wagwan"
}

// document.getElementById("redButton").onclick = function(){
//     document.getElementById("red").innerHTML = "wagwan"
// }

document.getElementById("red").onclick = function(){
    document.getElementById("red").style.display = "none"
}


function appendImage(imagePath){
    const container = document.getElementById("myButton");

    const img = document.createElement("img")

    img.src = imagePath;

    container.appendChild(img)
}

const button = document.getElementById('#myButton');

button.addEventListener("click", () => {
    appendImage('Assets/carPark.jpg')
  
})


