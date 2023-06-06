
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