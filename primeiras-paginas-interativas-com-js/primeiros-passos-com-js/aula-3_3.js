/* 

3-) Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os código da tabela a seguir para ler qual é a condição de pagamento escolhida e efetuar o cálculo adeqado.

Código Condição de pagamento:
    - À vista débtio, recebe 10% de desconto
    - À vista no Dinheiro ou PIX, recebe 15% de desconto
    - Em duas vezes, preço normal de etiqueta sem juros
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/

const produto = 10
const metodoPagamento = 'Débito'

const aVistaDebito = 0.9
const aVistaDinheiroPix = 0.85
const acimaDuasVezes = 1.10

if (metodoPagamento === 'Débito') {
    const valorTotal = produto * aVistaDebito
    console.log(`O valor do produto pagando no débito é R$ ${valorTotal.toFixed(2)}`)
} else if (metodoPagamento === 'Dinheiro' || metodoPagamento === 'PIX') {
    const valorTotal = produto * aVistaDinheiroPix
    console.log(`O valor do produto pago em dinheiro ou pix é R$ ${valorTotal.toFixed(2)}`)
} else if (metodoPagamento === '2x sem juros') {
    const valorTotal = produto
    console.log(`O valor do produto pago em 2x sem juros é R$ ${valorTotal.toFixed(2)}`)
} else {
    const valorTotal = produto * acimaDuasVezes
    console.log(`O valor do produto pago em acima de duas vezes é R$ ${valorTotal.toFixed(2)}`)
}

