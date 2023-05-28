var messenge_encript = ""

function encript() {
    document.getElementById("content-empty").style.display = "none"
    document.getElementById("content-text").style.display = "inline"
    let text = document.getElementById("text").value
    text = text.replaceAll("e", (value) => `enter`)
    text = text.replaceAll("i", (value) => `imes`)
    text = text.replaceAll("a", (value) => `ai`)
    text = text.replaceAll("o", (value) => `ober`)
    text = text.replaceAll("u", (value) => `ufat`)
    messenge_encript = text
    document.getElementById("messenge-encript").innerHTML = text
    document.getElementById("copy").style.backgroundColor = "#ffffff"
}

function decript() {
    document.getElementById("content-empty").style.display = "none"
    document.getElementById("content-text").style.display = "inline"
    let text = document.getElementById("text").value
    text = text.replaceAll("enter", (value) => `e`)
    text = text.replaceAll("imes", (value) => `i`)
    text = text.replaceAll("ai", (value) => `a`)
    text = text.replaceAll("ober", (value) => `o`)
    text = text.replaceAll("ufat", (value) => `u`)
    messenge_encript = text
    document.getElementById("messenge-encript").innerHTML = text
    document.getElementById("copy").style.backgroundColor = "#ffffff"
}

function copy() {
    navigator.clipboard.writeText(messenge_encript)
        .then(() => {
            console.log('El texto se copio en el portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar en el portapapeles:', err)
        })
    document.getElementById("copy").style.backgroundColor = "#d5d5d5"
}