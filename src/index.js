// Importamos o objeto do arquivo herois
const heroi = require("./herois");
// Importamos a função lógica do classificador
const calcularNivel = require("./classificador");

// 1. Pegamos o saldo usando a função que veio do herois.js
const saldoVitorias = heroi.totalDeVitorias();

// 2. Chamamos o classificador passando esse saldo
const nivel = calcularNivel(saldoVitorias); // O desafio pede para basear o nível nas Vitórias

// 3. Saída final conforme o requisito da DIO
console.log(
  `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
);
