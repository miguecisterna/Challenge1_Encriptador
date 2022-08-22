const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.background ="#E09FA8";
    inputTexto.value = "";
}

function encriptar(stringEncriptado){

    let matriz = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matriz[i][0],matriz[i][1])
        }
    }

    return stringEncriptado;

}
