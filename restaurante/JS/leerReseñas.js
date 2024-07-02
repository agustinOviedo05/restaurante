let reseña = document.querySelector(".platos")

fetch('json/reseñas.json')
.then((response) => {
     return response.json()
    })

.then((hola) => {
      for (let i=0; i < 10; i++){
         reseña.innerHTML +=
         /*html*/ `
         <div class="producto">
                <div class="imagen">
                <img src="${hola[i].imagen}" alt="" class="imagen">
                    <div class="puntuacion">${hola[i].calificacion}⭐</div>
                </div>
                <div class="desPlato">
                    <div class="nomPlato">${hola[i].usuario}</div>
                    <div class="plato">-${hola[i].plato}</div>
                    <div class="descripcion">${hola[i].descripcion}</div>
                </div>
            </div>

         ` 
       
    }
})