var galeria_a = 0;  

mostrar(galeria_a);

function pulsa(x) {
    mostrar(galeria_a += x);
}

function mostrar(x) {
    var i;
    var z = document.getElementsByClassName("galeria");
    var numVisible = (window.innerWidth <= 768) ? 1 : 3;  
    var imagenes = document.querySelectorAll(".galeria")


    if (x >= z.length) {
        galeria_a = 0;  
    } else if (x < 0) {
        galeria_a = z.length - numVisible;  
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


var clic = document.getElementById("menu_checkbox");
var menu = document.querySelector(".esconder_menu");
var hamburguesa = document.querySelector(".menu_png")
var x = document.querySelector(".menu_png2")
function pulsador() {
    if (clic.checked) {
        menu.style.display = "block";
        hamburguesa.style.display = "none";
        x.style.display = "block";
    } else {
        menu.style.display = "none";
        hamburguesa.style.display = "block";
        x.style.display = "none";
    }
}

function ocultarMenu() {
    clic.checked = false; 
    menu.style.display = "none";
    hamburguesa.style.display = "block";
    x.style.display = "none";
}


