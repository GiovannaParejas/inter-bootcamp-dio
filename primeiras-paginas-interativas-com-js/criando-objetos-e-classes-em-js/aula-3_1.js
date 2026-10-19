/*
    1 - Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gasto_medio_combustivel_por_km;

  constructor(marca, cor, gasto_medio_combustivel_por_km) {
    this.marca = marca;
    this.cor = cor;
    this.gasto_medio_combustivel_por_km = gasto_medio_combustivel_por_km;
  }

  gastoPercurso(quantidadeKM, precoCombustivel) {
    const consumoCombustivel =
      this.gasto_medio_combustivel_por_km * quantidadeKM;
    return consumoCombustivel * precoCombustivel;
  }
}

const miata = new Carro("Mazda", "Vermelho", 1 / 10);

console.log(
  `O valor total para ir de Guarulhos para Cape Town com um ${miata.marca} é de R$ ${miata.gastoPercurso(6395, 6).toFixed(2)}`,
);
