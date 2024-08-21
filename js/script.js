document.addEventListener('DOMContentLoaded', () => {
    const btCrip = document.getElementById("btCrip")
    const btDescrip = document.getElementById("btDescrip")
    const btCopiar = document.getElementById("btCopiar")

    btCrip.addEventListener('click', ()=>codificar())
    btDescrip.addEventListener('click', ()=>decodificar())
    btCopiar.addEventListener('click', ()=>copiarTexto())
});

function codificar() {
    let texto = document.getElementById("inputText").value
    let textoCodificado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").value = ''
    document.getElementById("outputText").value = textoCodificado
}

function decodificar() {
    let textoCodificado = document.getElementById("inputText").value
    let texto = textoCodificado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").value = ''
    document.getElementById("outputText").value = texto
}

function copiarTexto() {
    let textoCodificado = document.getElementById("outputText").value;

    navigator.clipboard.writeText(textoCodificado)
}