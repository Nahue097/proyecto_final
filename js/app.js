document.querySelector('.bars__menu').addEventListener('click', animateBars);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
   
}

/* 
document.getElementById("btn__menu").addEventListener("click", mostrar_menu);
 
var nav = document.getElementById("nav");


function mostrar_menu(){
    nav.style.left="0px";
}


function ocultar_menu(){
    
    nav.style.left="-700px"
   
}
 */

document.getElementById("btn__menu").addEventListener("click", function(){

    document.getElementById("nav").classList.toggle("mostrar");
});