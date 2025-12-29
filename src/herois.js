let nome = "Arthur";
let vitorias = 155;
let derrotas = 5;

function totalDeVitorias() {
  return vitorias - derrotas;
}

module.exports = { nome, vitorias, derrotas, totalDeVitorias };
