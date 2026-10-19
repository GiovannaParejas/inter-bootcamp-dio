function aplicarDesconto(valor, desconto) {
  return valor * desconto;
}

function pagamentoNoDebito(aplicarDesconto) {
  console.log(
    `O valor do produto pagando no débito é R$ ${aplicarDesconto(produto, aVistaDebito).toFixed(2)}`,
  );
}

function pagamentoNoDinheiroOuPix(aplicarDesconto) {
  console.log(
    `O valor do produto pago em dinheiro ou pix é R$ ${aplicarDesconto(produto, aVistaDinheiroPix).toFixed(2)}`,
  );
}

function pagamentoEmDuasVezes(aplicarDesconto) {
  console.log(
    `O valor do produto pago em 2x sem juros é R$ ${aplicarDesconto(produto, duasVezes).toFixed(2)}`,
  );
}

function pagamentoAcimaDuasVezes(aplicarDesconto) {
  console.log(
    `O valor do produto pago em acima de duas vezes é R$ ${aplicarDesconto(produto, acimaDuasVezes).toFixed(2)}`,
  );
}

(function () {
  const produto = 10;
  const metodoPagamento = "Débito";

  const aVistaDebito = 0.9;
  const aVistaDinheiroPix = 0.85;
  const duasVezes = 1;
  const acimaDuasVezes = 1.1;

  if (metodoPagamento === "Débito") {
    pagamentoNoDebito(aplicarDesconto);
  } else if (metodoPagamento === "Dinheiro" || metodoPagamento === "PIX") {
    pagamentoNoDinheiroOuPix(aplicarDesconto);
  } else if (metodoPagamento === "2x sem juros") {
    pagamentoEmDuasVezes(aplicarDesconto);
  } else {
    pagamentoAcimaDuasVezes(aplicarDesconto);
  }
})();
