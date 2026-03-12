// console.log("Hello Word") // printa no terminal

// let idade = 17; // pode ser mudada alguma hora no codigo
// const nome = "FIlipe"; // uma variavel constante, que nao muda, tipo o nome

// console.log(nome)
// console.log("nome")

// console.log(`Bem vindo, ${nome}!`)
// console.log("Bem vindo, ", nome)

// // if(true){

// // } elif{}{

// // } else{

// // }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i <= 0; i--){
//     console.log(i)
// }

// let frutas = ["maca", "banana", "kiwi", "morango"]

// console.log(frutas[0])

function mudaTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Listas de Compras!"
    titulo.style.color = "Blue"

    let itens = ["maça", "banana", "kiwi", "morango"]
    let container = document.getElementById("listas-frutas")

    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1} ${itens[1]} </p>`
    }

}