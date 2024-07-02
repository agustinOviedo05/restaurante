let pltos = document.querySelector(".platos")

fetch('json/platos_argentinos.json')
.then((response) => {
     return response.json()
    })

.then((plato) => {
      for (let i=0; i < 10; i++){
         pltos.innerHTML +=
         /*html*/ `
         <a href="plato.html" class="producto">
                <div class="imagen">
                    <img src="${plato[i].image}" alt="" class="imagen">
                    <div class="puntuacion">${plato[i].rate}⭐</div>
                </div>
                <div class="desPlato">
                    <div class="nomPlato">${plato[i].plato}</div>
                    <div class="descripcion">${plato[i].description}</div>
                    <div class="rate">$${plato[i].price}</div>
                </div>
            </div>
         </a>
         ` 
       
    }
})