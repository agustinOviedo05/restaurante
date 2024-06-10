// console.log("conectado")

// //capturo solo un nodo con ID
// let listaProductos = document.getElementById("productos")
// console.log(listaProductos.innerHTML)

// //captura nodos, selectores id o selectores clase = 
// let cont = document.querySelector(".contenedor")
// console.log(cont)

// //capturo clases y las convierte en un array
// let contenedor = document.querySelectorAll(".contenedor")
// console.log(contenedor[0].innerHTML)
// console.log(contenedor[1].innerHTML)


// //capturo clases y las convierte en un array
// let container = document.getElementsByClassName("contenedor")
// console.log(container[0].innerHTML)


//CREAR LISTA

let nuevaLista = document.createElement("ul")

document.body.appendChild(nuevaLista)

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "primero"
nuevaLista.appendChild(listaElemento1)

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "segundo"
nuevaLista.appendChild(listaElemento2)

//capturo footer

let footer = document.querySelector("footer")
console.log(footer.innerHTML)

//capturar 
let resta = document.getElementById("resta")
let contador = document.getElementById("contador")
let sumar = document.getElementById("sumar")

let conter = 1
contador.innerText = conter

function restarN() {
    if (conter > 1) {
        conter = conter - 1
        contador.innerText = conter
    } else {
        alert("1 producto es lo minimo q se puede llevar")
        resta.style.color ="red";
        resta.style.cursor ="not-allowed";
    }
}

function sumarN() {
    if (conter <= 9) {
        conter = conter + 1
        contador.innerText = conter
    }else{
        alert("se alcanzo el maximo de productos")
        resta.style.color ="black";
        resta.style.cursor ="not-allowed";
    }

}

console.log(conter)


