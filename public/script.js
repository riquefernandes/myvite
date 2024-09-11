const msg = document.getElementById("teste")

function show(){
    return msg.innerHTML = "Olá"
}

function test(){
    show()
}

window.test = test;