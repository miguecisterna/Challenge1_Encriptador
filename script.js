const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.background ="#E09FA8";
    inputTexto.value = "";
}

function btnDesencriptar(){

    const textoDesenctiptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesenctiptado;
    mensaje.style.background = "#E09FA8";
    inputTexto.value = "";
}


function encriptar(stringEncriptado){

    let matriz = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }

    return stringEncriptado;

}

function desencriptar(stringDesencriptado){

    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptado.includes(matriz[i][1])){
            stringDesencriptado =stringDesencriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }

    return stringDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    mensaje.style.background = "#E09FA8;";
    mensaje.style.backgroundImage = "url('images/lock.png')";
    mensaje.style.backgroundSize = "100%";
}
