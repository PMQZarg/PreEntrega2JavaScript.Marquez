console.table(serviciosproductos);
const carro = [];

let contenedorServiciosProductos = document.getElementById('miserviproducto');
let tablaBody = document.getElementById('tablabody');

// Mostrar todas las cards de productos al cargar la página y antes de la ventanita de pregunta
renderizarServiciosProductos(serviciosproductos);



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


  let botones = document.getElementsByClassName('compra');// aca es donde le doy entidad a la familia de botones, lo vuelvo constante al botones, le agrego un escuchador de eventos, que cuando se haga click lo registre, y luego a que cosa le hizo click con el ID
for (const boton of botones){
  boton.addEventListener('click',()=>{ 
    console.log('Hiciste click en el boton id: ' +boton.id);
const ProdCarrito = serviciosproductos.find((serviProducto)=>serviProducto.id ==boton.id);
//hacer CONSOLE.LOG para chequear si funciona todo
console.log (ProdCarrito);
agregarACarrito(ProdCarrito);


  })    
}
}
 



function agregarACarrito(serviProducto){
  carro.push(serviProducto);
  console.table(carro);


//ahora le voy a avisar al usuario que  lo que hizo fué agregar un producto al carrito
alert ('agregaste 🎶'+serviProducto.nombre+' al carrito');




//para visualizar el producto en una tabla que el usuario pueda ver que compró
tablaBody.innerHTML +=`
<tr>
<td>${serviProducto.id}</td>
<td>${serviProducto.nombre}</td>
<td>${serviProducto.precio}</td>

</tr>
`;

}

//formulario,

//LocalStorage en este queda toda la info
//guardar datos
let carrito=JSON.parse(localStorage.getItem('carro')) || [];
let cantidad=document.getElementById('cantidad');
let listaServiciosProductos=JSON.parse(localStorage.getItem('listaServiciosProductos')) || [];
localStorage.setItem('usuarioActivo', 'Pablo');
localStorage.setItem('cantIngresos', 14);
localStorage.setItem('compraServiProducto',true);
//recuperacion de datos
console.log(localStorage.getItem('usuarioActivo'));
console.log(localStorage.getItem('cantIngresos'));
console.log(localStorage.getItem('compraServiProducto'));

const usuario = localStorage.getItem('usuarioActivo');
if(usuario != null){
  alert(`Bienvenido de nuevo ${usuario}`);
  }else{
    const usuNuevo ='Pablo';
    localStorage.setItem('usuarioActivo', usuNuevo);
  }

  //session storage en este no queda guardado la data si cierro pesataña
  sessionStorage.setItem('Gallardo', 'DT');
  sessionStorage.setItem('muchosTitulos', [7,7,8,8,9]);
  const TitulosGallardoDTRiver = sessionStorage.getItem('muchosTitulos').split (',').map((titulo)=>
  parseInt(titulo));
  console.log(TitulosGallardoDTRiver);

localStorage.removeItem('cantIngresos');
  
//Para poner el botón de finalizar la compra

//incrementar el total
/*let totalCarrito = 0;
document.getElementById('total').innerText ='Total a pagar $: ' + totalCarrito;
*/
//Lo dejé comentado a lo anterior, porque me hacia conflicto y no funcionaba el botón para finalizar compra con el cartelito que viene despues.

//localStorage
localStorage.setItem('carrito', JSON.stringify(carro));

const DateTime=luxon.DateTime;
const inicio=DateTime.now();
console.log(inicio.toLocaleString());
console.log(inicio.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS));

//finalizar compra

let Botonfinalizar = document.getElementById('BotonFinalizarCompra');

Botonfinalizar.onclick = () => {
Toastify({
    text: "Gracias por tu compra! Ya podés acceder a tu archivo adquirido.",
    duration: 3000,
    gravity: 'top',
    position: 'right',
    close: true,
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    offset: {
        x: 150,
        y: 110
    },
}).showToast();

//Para remover la info una vez se cierre la pestaña
  document.getElementById('tablabody').innerHTML+=''
  cantidad.innerText=`${listaServiciosProductos.length}`;
  document.getElementById('total').innerText = 'Total a pagar $: ';
  localStorage.removeItem('listaServiciosProductos');
  const fin=DateTime.now();

}
