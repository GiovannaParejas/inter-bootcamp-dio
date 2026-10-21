const { gets, print } = require("./funcoes-aula");

/* 
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100. 
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/


let maiorValor = 0

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)