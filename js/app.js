import { stockProductos } from "./stock.js";


const contenedorProductos = document.getElementById("contenedor-productos")

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById("vaciar-carrito")

const precioTotal= document.getElementById('precioTotal')

const precioTotalDos= precioTotal;



//constante para el boton de finalizar compra
const finalizarCompra =document.getElementById('finalizar-compra')


let carrito = [] //no borrar carrito

//la opcion de finalizar compra sale un alerta al hacer click, borrar la alert y hacer un modal
finalizarCompra.addEventListener('click' , () =>{carrito.length = 0
    actualizarCarrito(),
    Swal.fire({
        title: 'Confirmas la compra?' ,
        text: ``,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero comprar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra Realizada!',
            'Tu compra fue procesada con exito.',
            'success'
          )
        }
      })

}
)



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


stockProductos.forEach((producto) => {

const div = document.createElement("div")
div.classList.add("producto")
div.innerHTML= `
<div style="width: 18rem;">
<img src="${producto.img}" class="card-img-top" alt="...">
<div> 
<h5 class="card-title">${producto.nombre}</h5>
<p> Talle: ${producto.talle}</p>
<p> Color: ${producto.color}</p>
<p> Precio:$ ${producto.precio}</p>
<button class="boton_comprar" id=botonAgregar${producto.id}>Comprar</button></div>
</div>
`

contenedorProductos.appendChild(div)

const boton = document.getElementById(`botonAgregar${producto.id}`)

boton.addEventListener('click' , () => {    
    agregarAlCarrito(producto.id)
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: `Haz agregado al carrito  un ${producto.nombre}. Color: ${producto.color}, con un valor de $${producto.precio} `,
        showConfirmButton: false,
        timer: 1500
      })
})

})

const agregarAlCarrito = (prodId) => {
    const item= stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito);
} 



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}  

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML= " "
    
    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad} </span></p>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })

    contadorCarrito.innerText = carrito.length
    contadorDosCarrito.innerText= carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
    precioTotalDos.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
   
}

