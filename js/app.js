const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
  modalImagen.addEventListener('show.bs.modal', (event) => {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    // Construir Imagen
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galeria';

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);
  });

  modalImagen.addEventListener('hidden.bs.modal', () => {
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
