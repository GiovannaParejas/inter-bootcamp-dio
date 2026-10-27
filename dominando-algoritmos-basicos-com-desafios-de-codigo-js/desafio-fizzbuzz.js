// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
const resultadosInputs = [3, 5, 15, 4];
let i = 0;

function gets() {
  const resultado = resultadosInputs[i];
  i += 1;
  return resultado;
}

function print(texto) {
  console.log(texto);
}

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(resultado) {
  if (resultado % 3 == 0 && resultado % 5 == 0) {
    resultado = "FizzBuzz";
  } else if (resultado % 3 == 0) {
    resultado = "Fizz";
  } else if (resultado % 5 == 0) {
    resultado = "Buzz";
  }
  return resultado;
}

for (let i = 0; i < resultadosInputs.length; i++) {
  let resultado = gets();
  print(fizzBuzz(resultado));
}
