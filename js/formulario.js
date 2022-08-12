

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_gl0wr4a';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Su Consulta Fue Enviada',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

