
// function pintar() {
//     ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


//****************************************************

// function pintar(element) {
//         element.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", function(){pintar(ele)});


//****************************************************

function pintar(element, color= 'green') {
     element.style.backgroundColor = color
     
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", function() {pintar(ele, 'yellow')});