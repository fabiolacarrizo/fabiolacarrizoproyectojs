  const mensajeEnviado= document.getElementById('contado');
const botonConsulta= document.getElementById('enviar_pregunta');


let contador= "Su consulta Fue enviada con exito";

botonConsulta.addEventListener('click', () => {
    console.log("click");
    mensajeEnviado.textContent= contador;
});

