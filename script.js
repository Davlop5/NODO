// script.js

function updateContent() {
    const mobileContent = document.getElementById('mobile-content');
    const desktopContent = document.getElementById('desktop-content');
  
    if (window.innerWidth <= 495) { // Pantallas de ancho X o menor (móviles)
      mobileContent.classList.remove('hidden');
      desktopContent.classList.add('hidden');
    } else { // Pantallas mayores a Xpx (escritorio/tableta)
      desktopContent.classList.remove('hidden');
      mobileContent.classList.add('hidden');
    }
  }
  
  // Ejecutar la función al cargar la página y al redimensionar la ventana
  window.addEventListener('load', updateContent);
  window.addEventListener('resize', updateContent);
  