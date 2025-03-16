const trial =
document.querySelector('h1') 
// trial.innerText = "ONE MORE TIME"
//trial.style.color = '#22663a'
const firstImg = document.querySelector("img")
firstImg.style.width ="350px"



// document.getElementById("mButton").onclick = function(){
//     document.getElementById("text").innerHTML = "wagwan"
// }

// document.getElementById("redButton").onclick = function(){
//     document.getElementById("red").innerHTML = "wagwan"
// }

// document.getElementById("red").onclick = function(){
//     document.getElementById("red").style.display = "none"
// }

//RANDOS
/*function appendImage(imagePath){
    const container = document.getElementById("myButton");

    const img = document.createElement("img")

    img.src = imagePath;

    container.appendChild(img)
}

const button = document.getElementById('#myButton');

button.addEventListener("click", () => {
    appendImage('Assets/carPark.jpg')
  
})*/
//

const guestCount = document.querySelectorAll(".guests")
guestCount.forEach((guests) => {

const subtractBtn = document.querySelector(".subtract");
const addtBtn = document.querySelector(".add");
const reservationValue = document.querySelector(".reservationValue");

//initialize a variable to store the count
let count = 0;
//function to update the value

function updateValue() {
    reservationValue.value = count
}

//
subtractBtn.addEventListener("click", () => {
    if (count > 0){
        count--;
        updateValue()
        console.log(count)
    }
})

addtBtn.addEventListener("click", () => {
        count++;
        updateValue()
        console.log(count)
   
})
})
