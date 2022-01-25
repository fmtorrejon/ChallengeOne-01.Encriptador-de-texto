/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputTexto = document.querySelector("input#input-texto");
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnCopiar = document.getElementById("btn-copy");
var mensaje = document.querySelector("input#mensaje");


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);

const filtro = /[^a-z !ñ]+/



function encriptar(){
    if (inputTexto.value.match(filtro)) 
        {alert ("¡No ingresar letras con acentos, caractéres especiales o números!")}


    else {
        var texto = inputTexto.value;
        texto=texto.replaceAll("e", "enter");
        texto=texto.replaceAll("i", "imes");
        texto=texto.replaceAll("o", "ober");
        texto=texto.replaceAll("a", "ai");
        texto=texto.replaceAll("u", "ufat");
        mensaje.value=texto;
        //alert("¡Mensaje encriptado!!");
        
    }
   
}


function desencriptar(){

    if (inputTexto.value.match(filtro)) 
        {alert ("¡No ingresar letras con acentos, caractéres especiales o números!")}
     
     else{
        var texto = inputTexto.value;
        texto=texto.replaceAll("enter", "e");
        texto=texto.replaceAll("imes", "i");
        texto=texto.replaceAll("ober", "o");
        texto=texto.replaceAll("ai", "a");
        texto=texto.replaceAll("ufat", "u");
        mensaje.value=texto;
        //alert("¡Mensaje desencriptado!!");
     
     }
    
}

function copiar(){
     var content = document.getElementById('mensaje');
     content.select();
     document.execCommand('copy');
	 alert("Copiado!!");

}

