const modalImagen = document.querySelector('#modal-imagen');

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
