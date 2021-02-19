$(document).ready(function () {
    $("#Texto1").hide();
    $("div p").slideUp(2500);
});

// Defino mi callback(funcion) de alerta
function myAlert(){
    alert("Se termino animacion");
}

// Defino otro callback
function myFadeOut() {
    $("#Texto1").fadeOut(1500, myFadeIn);
}

function myFadeIn() {
    $("#Texto1").fadeIn(1500, myFadeOut);
}

$("button").click( function() {
    // Podemos pasarle como segundo parametro la cantidad
    // de tiempo en ms (milisegundos)
    myFadeIn();
    $("div p").slideToggle(500);
});


