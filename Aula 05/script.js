

// document.getElementById(nome) // retorna o elemento com o ids passado
// document.getElementsByClassName(nome) // retorna todas as tags com essa classe
// document.getElementsByTagName(nome) // retorna um vetor com todas as tags com esse nome

// const titulo = document.getElementById("titulo1")

// titulo.textContent = "Titulo adicionado com JS"
// titulo.setAttribute("class", "titulo-base")
// titulo.style.color = "blue"

let src = "https://tse3.mm.bing.net/th/id/OIP.WRvsA9QigmUtmMfh7zFSawHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
let text = "Apenas um cachorro salsicha"
let titulo = "Cachorro Bob"

const infoCard = document.getElementById('info1')
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

imgCard.setAttribute('src', src)
infoCard.textContent = text
tituloCard.textContent = titulo

