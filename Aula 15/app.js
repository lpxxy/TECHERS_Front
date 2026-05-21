// classe: ela dita como os objetos pertencentes a ela irao se parecer
// objeto: sao instancias, as criacoes individuais a partir da classe

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const aluno = new Pessoa("Ana", 24); //instanciei um objeto novo


