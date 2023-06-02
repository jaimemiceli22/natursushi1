var galeria_a = 0;  // Iniciar en 0 en lugar de 1

mostrar(galeria_a);

function pulsa(x) {
    mostrar(galeria_a += x);
}

function mostrar(x) {
    var i;
    var z = document.getElementsByClassName("galeria");
    var numVisible = (window.innerWidth <= 768) ? 1 : 3;  // Cambiar el número de imágenes visibles según el ancho de la ventana
    var imagenes = document.querySelectorAll(".galeria")


    if (x >= z.length) {
        galeria_a = 0;  // Volver a la primera imagen si se supera el límite
    } else if (x < 0) {
        galeria_a = z.length - numVisible;  // Ir a la última imagen si se pasa de la primera
    }

    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }

    for (i = galeria_a; i < galeria_a + numVisible; i++) {
        z[i].style.display = "block";
        if (window.innerWidth <= 768){
            imagenes[i].style.width = "80%"
        }
        
        
    }
}
function mostrarmenu() {
    var pulsado = document.querySelector("#toggle-menu");
    var header = document.querySelector(".header");
    var menu = document.querySelector(".menu");

    if (pulsado.checked) {
        header.style.height = "30vh";
        
    } else {
        header.style.height = "auto";
    }
}