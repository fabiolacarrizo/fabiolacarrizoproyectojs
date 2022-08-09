import { stockProductos } from "./stock.js";


const contenedorProductos = document.getElementById("contenedor-productos")

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById("vaciar-carrito")

const precioTotal= document.getElementById('precioTotal')
let carrito = []

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
        title: `Haz agregado ${producto.nombre}. Color: ${producto.color}, con un valor de $${producto.precio} al carrito `,
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
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)

   
}

