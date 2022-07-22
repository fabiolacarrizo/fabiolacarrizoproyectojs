import { productos } from "./index.js";

let carritoDeCompra[]

export const carrito = (productoId) =>{

const contenedorCarrito= document.getElementById("carrito-contenedor")

const renderProductosCarrito= () =>{


 let producto  = productos.find (producto => productos.id == productoId)

 carritoDeCompra.push(producto)

 productos.cantidda=1;

 let div= document.createElement('div')

 div.classList.add('productoCarrito')

 div.innerHTML=`<h5 class="card-title">${productos.nombre}</h5>
 <p class="card-text">Talla: ${productos.talle}</p>
 <p class="card-text">Color: ${productos.color}</p>
 <p class="card-text">Precio:$ ${productos.precio}</p>
 <button class="boton_comprar" id=boton${productos.id}>Comprar</button>
 `
 contenedorCarrito.appendChild(div)

}
renderProductosCarrito(productos)
}

