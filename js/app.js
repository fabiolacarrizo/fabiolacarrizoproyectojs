import { productos } from "./index.js";
import { carritoProductos} from "./carrito.js";


const mostrarProductos= (productos) => { 

const contenedorProdutos= document.getElementById("producto_contenedor");

productos.forEach( productos => {

const div = document.createElement("div")
div.classList.add("card")
div.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${productos.img}" class="card-img-top" alt="...">
<div class="card-body"><h5 class="card-title">${productos.nombre}</h5>
<p class="card-text">Talle: ${productos.talle}</p>
<p class="card-text">Color: ${productos.color}</p>
<p class="card-text">Precio:$ ${productos.precio}</p>
<button class="boton_comprar" id=boton${productos.id}>Comprar</button></div>
</div>
`
contenedorProdutos.appendChild(div)

const boton= document.getElementById(`boton ${productos.id}`);

boton.addEventListener("click", () => {
    carritoProductos(producto.id)
    alert(`Se agrego ${productos.nombre} con un valor de ${productos.precio}`)
})

})

}

mostrarProductos(productos)