const quienesSomos= document.getElementById("cardQuienesSomos");

fetch("../json/datos.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="animate__animated animate__wobble" >
      <h4>${producto.titulo}</h4>
      <p>${producto.parrafo}</p>
      <p> ${producto.imagen}</p>
      <div/>
    `;
    quienesSomos.append(div);
  });
});

