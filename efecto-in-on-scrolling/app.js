window.onscroll = function () { miFunction() };

var futbol = document.getElementById("futbol");
var tennis = document.getElementById("tennis");
var judo = document.getElementById("judo");
var natacion = document.getElementById("natacion");

var distancia_futbol, distancia_tennis, distancia_judo, distancia_natacion;

function miFunction() {
    distancia_futbol = window.innerHeight - futbol.getBoundingClientRect().top;
    if (distancia_futbol >= 200) {
        futbol.classList.add("efecto-futbol");
    }
    distancia_tennis = window.innerHeight - tennis.getBoundingClientRect().top;
    if (distancia_tennis >= 200) {
        tennis.classList.add("efecto-tennis");
    }
    distancia_judo = window.innerHeight - judo.getBoundingClientRect().top;
    if (distancia_judo >= 200) {
        judo.classList.add("judo-efecto");
    }
    distancia_natacion = window.innerHeight - natacion.getBoundingClientRect().top;
    if (distancia_natacion >= 200) {
        natacion.classList.add("natacion-efecto");
    }

}