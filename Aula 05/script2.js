
// const nomes = ['Ana', 'Henrique', 'Rafael', 'Mateus', 'Gustavo', 'Filipe', 'Teodoro']

// nomes[0] = 'Barbara'
// nones[7] = 'Jose'

const dataInfo = [
    "Pikachu é o parceiro fiel de Ash, um Pokémon do tipo Elétrico que se recusa a evoluir.",
    "Charizard é um Pokémon Dragão/Fogo poderoso, que evoluiu de Charmander e tem um temperamento forte.",
    "Bulbasaur é um Pokémon inicial do tipo Grama/Veneno, conhecido por carregar uma semente nas costas.",
    "Squirtle é um Pokémon inicial do tipo Água, que se tornou um dos membros mais leais do grupo de Ash.",
    "Meowth é um Pokémon do tipo Normal que pertence à Equipe Rocket e é famoso por conseguir falar.",
    "Jigglypuff é um Pokémon fofo que usa sua canção para adormecer seus oponentes durante batalhas.",
    "Eevee é um Pokémon do tipo Normal conhecido por sua capacidade de evoluir em várias formas diferentes.",
    "Snorlax é um Pokémon Gigante do tipo Normal que dorme a maior parte do tempo e come quantidades enormes.",
    "Psyduck é um Pokémon do tipo Água que sofre de dores de cabeça constantes e usa poderes psíquicos.",
    "Gastly é um Pokémon Fantasma/Veneno que pertence à Equipe Rocket e pode se tornar intangível."
  ]
  
  const headings = [
    "Pikachu",
    "Charizard",
    "Bulbasaur",
    "Squirtle",
    "Meowth",
    "Jigglypuff",
    "Eevee",
    "Snorlax",
    "Psyduck",
    "Gastly"
  ]
  
  const images = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  ]

  const imgCard = document.getElementsByClassName('img-card')
  const titulo = document.getElementsByClassName('titulo')
  const info = document.getElementsByClassName('info')

  // for e while
  // for repete finitas vezes
  // white repete enquanto a condição for verdadeira

  for(let i = 0; i < 10; i++ ){
    imgCard[i].setAttribute("src", imgSrc[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
  }