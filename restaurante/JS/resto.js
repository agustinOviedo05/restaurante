// let resto = document.querySelector(".caracteristicas")
// console.log(resto)

// fetch('js/restaurantes.json')
// .then(response => {
//      return response.json()
//     })

// .then(data => {
//     data.forEach(plato => {
//         if(plato.truck_id==localStorage.getItem("indiceCache")){
//             console.log(plato.name)
//            resto.innerHtml =  `
//             <div class="nombre">
//                 <div class="Pfila">
//                     <h1>${plato.name}<h1></h1>
//                         <div class="euro">
//                             <i class="fa-solid fa-euro-sign"></i>
//                             <i class="fa-solid fa-euro-sign"></i>
//                             <i class="fa-solid fa-euro-sign"></i>
//                         </div>
//                 </div>
//                 <h5>Mexico,Londres</h5>
//             </div>

//             <div class="logos">

//                 <div class="log1">
//                     <i class="fa-regular fa-clock"></i>
//                     <h5>10AM-10PM</h5>
//                 </div>

//                 <div class="log2">
//                     <i class="fa-solid fa-location-dot"></i>
//                     <h5>1.5 KM</h5>
//                 </div>

//                 <div class="log3">
//                     <i class="fa-solid fa-car-side"></i>
//                     <h5>DELIVERY</h5>
//                 </div>
//             </div>

//             <div class="descripcion">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio temporibus magni repudiandae
//                 molestiae aliquid facere reiciendis voluptas.
//             </div>
//             `
//         }
//     });  
// })


fetch('json/restaurantes.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(plato => {
      if (plato.truck_id === localStorage.getItem("id")) {
        document.querySelector(".Pfila h1").innerText = plato.name;
        document.querySelector(".nombre h5").innerText = plato.category;
        document.querySelector(".log1 h5").innerText = plato.horario;
        document.querySelector(".log2 h5").innerText = plato.km;
        document.querySelector(".descripcion").innerText = plato.bio; 
        document.querySelector(".puntuacion").innerText = plato.puntuacion;
        document.querySelector(".img_fit").src = plato.cover_photo.src;
      }
    });
  })
