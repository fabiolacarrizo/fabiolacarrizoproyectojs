const modalContenedor= document.querySelector('.modal-container')

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('cerrar')

abrirCarrito.addEventListener('click', () =>{
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () =>{
    modalContenedor.classList.remove('modal-active')
})