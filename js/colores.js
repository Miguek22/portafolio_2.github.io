var botonPresionado = false;

    function cambiarColor() {
      var contenedores = document.querySelectorAll("#contenedor1");
      var clasesCeleste = ["celeste-fuerte", "celeste-normal", "celeste-claro"];
      var clasesRojo = ["rojo-fuerte", "rojo-normal", "rojo-claro"];
      if (!botonPresionado) {
        for (var i = 0; i < contenedores.length; i++) {
          for (var j = 0; j < clasesCeleste.length; j++) {
            if (contenedores[i].classList.contains(clasesCeleste[j])) {
              contenedores[i].classList.remove(clasesCeleste[j]);
              contenedores[i].classList.add(clasesRojo[j]);
              break;
            }
          }
        }
        botonPresionado = true;
      } else {
        for (var i = 0; i < contenedores.length; i++) {
          for (var j = 0; j < clasesRojo.length; j++) {
            if (contenedores[i].classList.contains(clasesRojo[j])) {
              contenedores[i].classList.remove(clasesRojo[j]);
              contenedores[i].classList.add(clasesCeleste[j]);
              break;
            }
          }
        }
        botonPresionado = false;
      }
    }