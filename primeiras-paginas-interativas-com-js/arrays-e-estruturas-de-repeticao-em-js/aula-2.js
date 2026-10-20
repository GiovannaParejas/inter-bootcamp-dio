const nome = "Giovanna";

for (let l = 0; l < nome.length; l++) {
  console.log(nome[l]);
}

const notas = [5, 7, 8, 2, 5];

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
