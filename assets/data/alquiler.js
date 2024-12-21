import {propiedadesAlquiler} from "./propiedades.js"
console.log(propiedadesAlquiler)

const contenedorAlquiler = document.getElementById("propiedadesAlquilerContainer")

    const cardProducto = (propiedad) =>  `
     <div class="card" style="width: 18rem;">
     <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
     <div class="card-body">
     <h5 class="card-title">${propiedad.nombre}</h5>
     <p class="card-text">Descripción: ${propiedad.descripcion}</p>
     <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${propiedad.ubicacion}</p>
     <p class="card-text">Habitaciones: ${propiedad.habitaciones} Baños: ${propiedad.baños}</p>
      <p style="color: ${propiedad.smoke ? 'green' : 'red'};">
     <i class="fas ${propiedad.smoke ? 'fa-solid fa-ban-smoking' : 'fa-solid fa-smoking'}"></i>
     ${propiedad.smoke ? 'No se permite fumar' : 'Permitido Fumar'}
     </p>
     <p style="color: ${propiedad.pets ? 'green' : 'red'};">
     <i class="fas ${propiedad.pets ? 'fa-solid fa-paw' : 'fa-solid fa-ban'}"></i>
     ${propiedad.pets ? 'Acepta mascotas' : 'No acepta mascotas'}
     </p>
     </div>
     </div>
     `;

    propiedadesAlquiler.forEach((propiedad) => {
        contenedorAlquiler.innerHTML += cardProducto(propiedad);
      });
     

   