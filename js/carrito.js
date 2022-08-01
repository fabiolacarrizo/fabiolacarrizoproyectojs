import { productos } from "./index.js";

let carridoDeCompras = []


export const carritoProductos = (productoId) => {

const contenedorCarrito = document.getElementById("carrito-contenedor")

const renderProductosCarrito = () =>{


    let producto = productos.find( producto => productos.id == productoId )
    carridoDeCompras.push(producto)

producto.cantidad=1;

let div = document.createElement("div")

div.classList.add("productoCarrito")
div.innerHTML= `<div class="card" style="width: 18rem;">
<img src="${productos.img}" class="card-img-top" alt="...">
<div class="card-body"><h5 class="card-title">${productos.nombre}</h5>
<p class="card-text">Talle: ${productos.talle}</p>
<p class="card-text">Color: ${productos.color}</p>
<p class="card-text">Precio:$ ${productos.precio}</p>
<button class="boton_comprar" id=boton${productos.id}>Comprar</button></div>
</div>
`
contenedorCarrito.appendChild(div)
}

renderProductosCarrito()

}