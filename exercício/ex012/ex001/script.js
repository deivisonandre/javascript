function  gritar() {
    alert ("Ahhhhhhhhhh!")
}

function perguntar() {
    var nome ;
    nome = prompt("Qual é seu nome?")
    alert("Olá "+ nome)
}

function mudar_texto() {
    var h1 = document.getElementsByTagName("h1")

    if(h1[0].innerText == "Treinamento"){
        h1[0].innerText = "Semple Evoluindo!"
    } else {
        h1[0].innerText = "Treinamento"
    } 
}

function incrementar() {
    var p1 = document.getElementById("p1")
    p1.innerText = parseInt(p1.innerText) + 1
}