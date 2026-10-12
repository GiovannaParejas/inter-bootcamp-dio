// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variáveis. Sendo elas: 

// 1 - Preço do etanol
// 2 - Preço da gasolina
// 3 - O tipo de combustível que está no seu carro
// 4 - Gasto médio de combustível do carro por KM
// 5 - Distância em KM da viagem

// Imprima no console o valor que será gasto para realizar esta viagem

const etanolPreco = 2
const gasolinaPreco = 3
const tipoCombustivel = 'Etanol'
const gastoMedioPorKM = 4
const DistanciaKM = 5

if (tipoCombustivel === 'Etanol') {
    const precoViagem = etanolPreco * gastoMedioPorKM * DistanciaKM
    console.log (`O preço da viagem utilizando etanol é de: R$ ${precoViagem.toFixed(2)}`)
} else {
    const precoViagem = gasolinaPreco * gastoMedioPorKM * DistanciaKM;
    console.log(`O preço da viagem utilizando gasolina é de R$ ${precoViagem.toFixed(2)}`)
}