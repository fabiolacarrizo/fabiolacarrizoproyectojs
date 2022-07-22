import { productos } from "./index.js";
import { carrito } from "./carrito.js";

const mostrarProductos=(productos) => {
    const contenedorProductos= document.getElementById("producto_contenedor")

  productos.forEach(productos =>{
    const div= document.createElement("div")
    div.classList.add("card")
    div.innerHTML += `  <div ">
    <img src="${productos.img}" class="card-img-top" alt="...">
    <div class="card-body"><h5 class="card-title">${productos.nombre}</h5>
    <p class="card-text">Talla: ${productos.talle}</p>
    <p class="card-text">Color: ${productos.color}</p>
    <p class="card-text">Precio:$ ${productos.precio}</p>
    <button class="boton_comprar" id=boton${productos.id}>Comprar</button></div></div>
    `
 contenedorProductos.appendChild(div)

const boton= document.getElementById(`boton${productos.id}`)

boton.addEventListener(`click`, () => {
  carrito(productos.id)
  alert(`Se agrego ${productos.nombre} $`)
} )


  })

}
mostrarProductos();