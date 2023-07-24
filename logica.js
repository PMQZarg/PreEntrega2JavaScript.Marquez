console.table(serviciosproductos);

let contenedorServiciosProductos = document.getElementById('miserviproducto');
let tablaBody = document.getElementById('tablabody');

// Mostrar todas las cards de productos al cargar la página y antes de la ventanita de pregunta
renderizarServiciosProductos(serviciosproductos);

// Filtrado de productos por precio
function filtrarPorPrecio(precioMax) {
  const filtrados = serviciosproductos.filter((producto) => producto.precio <= precioMax);
  return filtrados;
}

// Mostrando todas las cards de productos
function renderizarServiciosProductos(listaServiciosProductos) {
  contenedorServiciosProductos.innerHTML = ''; // Esto me limpia el  contenido previo
  for (const prod of listaServiciosProductos) {
    contenedorServiciosProductos.innerHTML += `
      <div class="card col-sm-2">
        <img class="card-img-top" src=${prod.foto} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">U$S ${prod.precio}</p>
          <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
        </div>
      </div>
    `;
  }
}

// Para preguntar despues de 5 segundos de ver todas las cards
setTimeout(() => {
  let precioUsuario = parseFloat(prompt('Ingresa el precio máximo que puedes abonar hasta U$S 40 (0-salir)'));
  
  while (precioUsuario !== 0) {
    if (isNaN(precioUsuario) || precioUsuario < 0) {
      alert('Por favor, ingrese un número válido 😲');
    } else {
      const prodsFiltrados = filtrarPorPrecio(precioUsuario);
      console.table(prodsFiltrados);
      renderizarServiciosProductos(prodsFiltrados);
    }
    precioUsuario = parseFloat(prompt('Ingresa el precio máximo que puedes abonar hasta U$S 40 (0-salir)'));
  }

  // Login para descuentos
alert('Accedé a beneficios, descuentos, promociones especiales. Enterarte antes que todos de eventos exclusivos, solo tenés que registrarte/loggearte 😊💻🎶👍');

let usuario;
let contrasenia;

for (let i = 1; i <= 3; i++) {
  usuario = prompt('Tu nombre de usuario');
  contrasenia = prompt('Tu contraseña');
  if ((usuario === 'Pablo') && (contrasenia === '789')) {
    alert('Bienvenido Pablo !!!');
    break;
  } else {
    alert('Usuario y/o contraseña incorrectos');
  }
}
}, 5000); 

