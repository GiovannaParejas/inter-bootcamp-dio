// Faça um programa para calcular o valor de uma viagem

// Você terá 3 varíáveis. Sendo elas:

// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem

const precoDoCombustivel = 5.00
const gastoMedioPorKM = 2.00
const DistanciaKM = 3.00

const litrosConsumidos = DistanciaKM * gastoMedioPorKM

const precoViagem = litrosConsumidos * precoDoCombustivel

console.log(`O valor total gasto na viagem é de: R$ ${precoViagem.toFixed(2)}`)
