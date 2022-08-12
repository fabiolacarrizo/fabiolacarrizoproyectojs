const quienesSomos= document.getElementById("cardQuienesSomos");

fetch("../json/datos.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${producto.titulo}</h4>
      <p>${producto.parrafo}</p>
      <p> ${producto.imagen}</p>
      <hr />
    `;
    quienesSomos.append(li);
  });
});

