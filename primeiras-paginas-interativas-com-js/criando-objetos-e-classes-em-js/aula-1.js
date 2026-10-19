// Uma coleção de dados com chave e valor (Objeto literal) 
const pessoa = {
    nome: 'Giovanna Parejas',
    idade: 18,
    //metodo
    descrever: function () {
        //this o contexto onde a função é utilizada, como ta dentro do objeto, ela assume o objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

