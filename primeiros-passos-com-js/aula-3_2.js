/* 

2-) O IMC - Indíce de Massa Corporal é um critério da Organização Mundial de Saúde para dar indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos Condição:
    - Abaixo de 18.5: Abaixo do peso
    - Entre 18.5 e 25: Peso normal
    - Entre 25 e 30: Acima do peso
    - Entre 30 e 40: Obeso
    - Acima de 40: Obesidade Grave
*/

const peso = 104
const altura = 1.71

const imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log(`Você está abaixo do peso! Seu IMC é ${imc.toFixed(2)}`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Parabens, seu peso está normal! Seu IMC é  ${imc.toFixed(2)}`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Cuidado, você está acima do peso! Seu IMC é ${imc.toFixed(2)}`)
} else if (imc >= 30 && imc < 40 ) {
    console.log(`Perigo, você está na categoria "Obeso"! Seu IMC é ${imc.toFixed(2)}`)
} else {
    console.log(`Urgente, você esta em obesidade grave! Seu IMC é ${imc.toFixed(2)}`)
}