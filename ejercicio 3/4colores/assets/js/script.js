const blue = document.querySelector("#blue")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const yellow = document.querySelector("#yellow")

function pintar() {
    this.style.backgroundColor = 'black'
    this.style.color = 'white'
}


blue.addEventListener("click", pintar);
red.addEventListener("click", pintar);
green.addEventListener("click", pintar);
yellow.addEventListener("click", pintar);

