
const consultaEnviadaAlerta = document.getElementById("enviar_pregunta") 
consultaEnviadaAlerta.addEventListener('click' , () => {

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Su Consulta Fue Enviada',
    showConfirmButton: false,
    timer: 1500
  })

})

