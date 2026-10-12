/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprama a sua média e a sua classificação conforme a tabela abaixo

media = (nota 1 + nota 2 + nota 3) / 3

Classificação: 
    - Média menor que 5, reprovação
    - Média entre 5 e 7, recuperação
    - Média acima de 7, passou de semestre
*/

const nota1 = 8
const nota2 = 8
const nota3 = 8

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`Reprovou de semestre! Sua média foi de ${media}`)
} else if (media <= 7) {
    console.log(`Você está de reuperação! Sua média foi de: ${media}`)
} else {
    console.log(`Parabens, você passou de semestre! Sua média foi de ${media}`)
}