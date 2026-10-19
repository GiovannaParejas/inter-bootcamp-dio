/* 
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC.
    Instancie uma pessoa chamada José que tenha 70kg de peso, 1,75 de altura e peça ao José para dizer o valor do seu IMC

*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.imc = peso / (altura * altura);
  }

  classificarIMC() {
    if (this.imc < 18.5) {
      return `Você está abaixo do peso!`;
    } else if (this.imc >= 18.5 && this.imc < 25) {
      return `Parabens, seu peso está normal!`;
    } else if (this.imc >= 25 && this.imc < 30) {
      return `Cuidado, você está acima do peso!`;
    } else if (this.imc >= 30 && this.imc < 40) {
      return `Perigo, você está na categoria "Obeso"!`;
    } else {
      return `Urgente, você esta em obesidade grave!`;
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);

console.log(`${jose.nome} seu imc é ${jose.imc.toFixed(2)}. ${jose.classificarIMC()}`);
