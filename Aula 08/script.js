

// const botao = document.querySelector('button')

// // botao.onclick = function(){
// //     console.log('Botao clicado via propriedade')
// // }

// function saudacao(){
//     console.log("Ola")
// }

// botao.addEventListener('click', saudacao)
// botao.addEventListener('click', () => console.log('Segunda funcao executada'))

// //  funcoes: é um bloco de codigo para executar uma tarefa especifica

// function soma(a, b){return a+b}

// const result = soma(1,5)

// console.log(result)

// const x = function(a,b) {return a+b}

// const dobrar = (n) => n * 2





// const botao = document.getElementById('botaoFoge');
       
// function fugirDoMouse() {
//     const larguraJanela = window.innerWidth - botao.offsetWidth;
//     const alturaJanela = window.innerHeight - botao.offsetHeight;
  
//     const novaPosX = Math.floor(Math.random() * larguraJanela);
//     const novaPosY = Math.floor(Math.random() * alturaJanela);
  
//     botao.style.left = novaPosX + 'px';
//     botao.style.top = novaPosY + 'px';
// }


// botao.addEventListener('mouseenter', fugirDoMouse);






function mudarCor() {
    const cor = document.getElementById("corInput").value.trim();

        document.body.style.backgroundColor = cor;

}
