const textareaInput = document.querySelector('.text-area');
const textareaOutput = document.querySelector('.mensaje');
const btnEncriptar = document.querySelector('.btn-Encriptar');
const btnDesencriptar = document.querySelector('.btn-Desencriptar');
const btnCopiar = document.querySelector('.copiar');


function encriptarTexto(texto) {
    const mapa = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.split('').map(caracter => mapa[caracter] || caracter).join('');
}


function desencriptarTexto(texto) {
    const mapa = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    
    return texto.replace(/enter|imes|ai|ober|ufat/g, matched => mapa[matched]);
}


function handleEncriptarClick() {
    const textoInput = textareaInput.value;
    const textoEncriptado = encriptarTexto(textoInput);
    textareaOutput.value = textoEncriptado;
}


function handleDesencriptarClick() {
    const textoInput = textareaInput.value;
    const textoDesencriptado = desencriptarTexto(textoInput);
    textareaOutput.value = textoDesencriptado;
}


function copiarTexto() {
    textareaOutput.select();
    document.execCommand('copy');
}


if (btnEncriptar && btnDesencriptar && btnCopiar) {
    btnEncriptar.addEventListener('click', handleEncriptarClick);
    btnDesencriptar.addEventListener('click', handleDesencriptarClick);
    btnCopiar.addEventListener('click', copiarTexto);
} else {
    console.error('No se encontraron los elementos del DOM.');
}
