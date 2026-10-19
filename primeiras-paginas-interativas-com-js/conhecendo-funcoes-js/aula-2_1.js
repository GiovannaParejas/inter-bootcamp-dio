function meuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(`Eu sou menor de idade. Eu tenho ${idade} anos.`);
    } else {
        console.log(`Eu sou maior de idade. Eu tenho ${idade} anos.`);
    }
}

(function (){
    const nome = 'Giovanna';
    const idade = 18;

    meuNome(nome);
    verificarIdade(idade)
})();