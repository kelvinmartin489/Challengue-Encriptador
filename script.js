var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".caja-texto");
    return cajatexto.value;
}

function ocultarAdelante(){
    munieco.style.display = "none";
    contenedor.style.display = "none";
}

function encriptarTexto(mensaje){
    var textoFinal = "";
    for(var i = 0; i < mensaje.length; i++){
        switch(mensaje[i]) {
            case "a": textoFinal += "ai"; break;
            case "e": textoFinal += "enter"; break;
            case "i": textoFinal += "imes"; break;
            case "o": textoFinal += "ober"; break;
            case "u": textoFinal += "ufat"; break;
            default: textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    return mensaje.replace(/ai/g, "a")
                  .replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");
}

const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", function() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert("Texto copiado al portapapeles");
});
