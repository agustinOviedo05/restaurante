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

function añadirCarrito(){
    conter= 1
    contador.innerText = conter
    alert("producto añadido al carrito")
}
console.log(conter)