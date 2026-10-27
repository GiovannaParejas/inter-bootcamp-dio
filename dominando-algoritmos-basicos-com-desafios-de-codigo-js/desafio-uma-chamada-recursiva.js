// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
const inputs = [10, 4, 15];
let i = 0;

function gets() {
  const n = inputs[i];
  i += 1;
  return n;
}

function print(texto) {
  console.log(texto);
}

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

let soma = 0;

function somatorio(n) {
  for (let i = n; i <= n && i >= 0; i--) {
    soma = soma + i;
  }
  console.log(soma);
}

for (let i = 0; i < inputs.length; i++) {
  soma = 0;
  let n = gets();
  somatorio(n);
}
