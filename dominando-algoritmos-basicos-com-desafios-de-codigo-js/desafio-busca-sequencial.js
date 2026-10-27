let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = 64;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let resultado = `Numero ${valor} nao encontrado!`;

for (let i = 0; i < elementos.length; i++) {
  if (elementos[i] === valor) {
    resultado = `Achei ${valor} na posicao ${i}`;
  }
}

console.log(resultado);
