function encriptar() {
    var text = document.getElementById("text").value
    
    var txtCifrado = String(text).replace(/e/gi, "enter");
    var txtCifrado = txtCifrado.replace(/i/gi, "imes");
    var txtCifrado = txtCifrado.replace(/a/gi, "ai");
    var txtCifrado = txtCifrado.replace(/o/gi, "ober");
    var txtCifrado = txtCifrado.replace(/u/gi, "ufat");

    if (text.length != 0){
        document.getElementById("hidden").style.display = "none";
        document.getElementById("show").style.display = "flex";
        document.getElementById("text-2").value = txtCifrado;
    }
}

function desencriptar(){
    var text = document.getElementById("text").value

    var txtCifrado = String(text).replace(/enter/gi, "e");
    var txtCifrado = txtCifrado.replace(/imes/gi, "i");
    var txtCifrado = txtCifrado.replace(/ai/gi, "a");
    var txtCifrado = txtCifrado.replace(/ober/gi, "o");
    var txtCifrado = txtCifrado.replace(/ufat/gi, "u");

    if (text.length != 0) {
        document.getElementById("hidden").style.display = "none";
    document.getElementById("show").style.display = "flex";
    document.getElementById("text-2").value = txtCifrado;
    }
}

function copiar(){
    var content = document.querySelector("#text-2");
    content.select();
    document.execCommand("copy");
}