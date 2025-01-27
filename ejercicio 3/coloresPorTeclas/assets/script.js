
// color = "white"


// document.addEventListener("keydown", function (event) {
    
//     if (event.key === "a") {
//         color = "pink"
//     } else if (event.key === "s") {
//         color = "orange"
//     } else if (event.key === "d") {
//         color = "skyblue"
//     }

    
//     const keyDiv = document.getElementById("key")
//     keyDiv.style.backgroundColor = color
// })

 color1 = "white"
 
document.addEventListener("keydown", function (event) {
    const key1 = document.getElementById("key1")
    // const key2 = document.getElementById("key2")


    if (event.key === "a"  || event.key === "A" ) {
        color1 = "pink"
    } else if (event.key === "s"  || event.key === "S") {
        color1 = "orange"
    } else if (event.key === "d"  || event.key === "D") {
        color1 = "skyblue"
    }
    key1.style.backgroundColor = color1

    
    if (event.key === "q" || event.key ==="Q" || event.key === "w" || event.key ==="W" || event.key === "e" || event.key === "E") {
        colorElemento(event.key);
    }
});


let nuevoElemento 
function colorElemento(tecla){
    if(!nuevoElemento){
nuevoElemento = document.createElement("div");
nuevoElemento.style.width = "200px";
nuevoElemento.style.height = "200px";
nuevoElemento.style.border = "2px solid black";
nuevoElemento.style.backgroundColor = "white";

document.body.appendChild(nuevoElemento);
        
}   

    if (tecla === "q"  || tecla === "Q") {
        nuevoElemento.style.backgroundColor  = "purple"
        
    } else if (tecla === "w"  || tecla === "W") {
        nuevoElemento.style.backgroundColor = "gray"
        
    } else if (tecla === "e"  || tecla === "E") {
        nuevoElemento.style.backgroundColor = "brown"
        
    }
}
