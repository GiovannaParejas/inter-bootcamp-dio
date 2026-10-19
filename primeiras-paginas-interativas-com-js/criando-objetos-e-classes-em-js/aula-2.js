class Pessoa {
    nome;
    idade;

    // o que acontece quando a instância é criada
    constructor (nome, idade) {
        this.nome = nome,
        this.idade = idade
        this.anoDeNascimento = 2026 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const giovanna = new Pessoa();
giovanna.nome = 'Giovanna Parejas';
giovanna.idade = 18;

const victor = new Pessoa('Victor', 20)

giovanna.descrever()