function calcularNivel(valorParaAnalise) {
  let nivel = "";

  if (valorParaAnalise <= 10) {
    nivel = "Ferro";
  } else if (valorParaAnalise >= 11 && valorParaAnalise <= 20) {
    nivel = "Bronze";
  } else if (valorParaAnalise >= 21 && valorParaAnalise <= 50) {
    nivel = "Prata";
  } else if (valorParaAnalise >= 51 && valorParaAnalise <= 80) {
    nivel = "Ouro";
  } else if (valorParaAnalise >= 81 && valorParaAnalise <= 90) {
    nivel = "Diamante";
  } else if (valorParaAnalise >= 91 && valorParaAnalise <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return nivel;
}

module.exports = calcularNivel;
