

//SOBRE

const botaosobre=document.getElementById("sobre")
const navsobre=document.getElementById("nav-sobre")
const botaox=document.getElementById("botao-x")

botaosobre.addEventListener("click", function(){
    navsobre.style.display="block"
})
botaox.addEventListener("click", function(){
    navsobre.style.display="none"
})


//CONTATO
const botaocontato=document.getElementById("contato")
const navcontato=document.getElementById("nav-contato")
const botaoxc=document.getElementById("botao-xc")

botaocontato.addEventListener("click", function(){
    navcontato.style.display="block"
})
botaoxc.addEventListener("click", function(){
    navcontato.style.display="none"
})


//TRAMPOS
const botaotrampos=document.getElementById("trampos")
const navtrampos=document.getElementById("nav-trampos")
const botaoxt=document.getElementById("botao-xt")

botaotrampos.addEventListener("click", function(){
    navtrampos.style.display="block"
})
botaoxt.addEventListener("click", function(){
    navtrampos.style.display="none"
})