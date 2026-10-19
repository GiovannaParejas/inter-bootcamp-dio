function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return `Você está abaixo do peso! Seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Parabens, seu peso está normal! Seu IMC é  ${imc.toFixed(2)}`;
  } else if (imc >= 25 && imc < 30) {
    return `Cuidado, você está acima do peso! Seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 30 && imc < 40) {
    return `Perigo, você está na categoria "Obeso"! Seu IMC é ${imc.toFixed(2)}`;
  } else {
    return `Urgente, você esta em obesidade grave! Seu IMC é ${imc.toFixed(2)}`;
  }
}

(function () {
  console.log("\nClassificando IMC\n");
  const imc = calcularIMC(66, 1.63);
  console.log(classificarIMC(imc));
})();

