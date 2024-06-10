let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 100; i++){
        let puntu= ""
        if(data[i].puntuacion === 4){
            puntu = "star star star star"
        }
        else if(data[i].puntuacion === 3){
            puntu = "star star star"
        }
        else if(data[i].puntuacion === 2){
            puntu = "star star"
        }
        else if(data[i].puntuacion === 1){
            puntu = "star"
        }
        else if(data[i].puntuacion === 5){
            puntu = "star star star star star"
        }
        else{
            puntu = "person"
        }
        
       
         document.querySelector('.resultados').innerHTML +=
         /*html*/`
         <a href="./resto.html" class="resto">
         <div class="puntuacion"><b>${data[i].puntuacion}</b></div>
         <div class="imagenresto">
            <img src="${data[i].avatar.src}" alt="">
             <div class="km"><b>3km</b></div>
         </div>
         <div class="desc">
             <div class="nomRest"><b>${data[i].name}</b></div>
             <div class="ubicacion"><b>${data[i].direccion}</b><br>${data[i].horario}</div>
             <div class="valoracion">
                 <div class="estrellas material-icons-outlined">
                 ${data[i].puntuacion}
                 </div>
                 <div class="logos">
                     <i class="fa-solid fa-euro-sign"></i>
                     <i class="fa-solid fa-euro-sign"></i>
                     <i class="fa-solid fa-euro-sign"></i>
                 </div>
                 
             </div>
         </div>
     </a>

         ` 
       
    }
})