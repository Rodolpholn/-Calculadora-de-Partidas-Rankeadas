const heroi = require("./herois");
const classificarNivel = require("./classificador");

const saldoVitorias = heroi.totalDeVitorias();

const nivelHeroi = classificarNivel(saldoVitorias);

console.log(
  `O Herói de nome ${heroi.nome} tem saldo de ${saldoVitorias} e está no nível de ${nivelHeroi}`
);
