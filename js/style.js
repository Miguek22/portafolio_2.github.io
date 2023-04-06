const contenedores = document.querySelectorAll('.hobbies');
        
        contenedores.forEach(contenedor => {
          const mensaje = contenedor.querySelector('.mensaje');
          
          contenedor.addEventListener('click', () => {
            contenedor.classList.toggle('mostrar-mensaje');
          });
        });