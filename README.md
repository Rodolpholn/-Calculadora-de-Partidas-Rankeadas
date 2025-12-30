# 🎮 Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como parte de um desafio da **DIO** para colocar em prática conceitos fundamentais de lógica de programação.

## 📝 Objetivo

O objetivo é criar uma calculadora que recebe a quantidade de vitórias e derrotas de um herói, calcula o saldo de partidas e determina o seu nível de ranking com base em uma tabela de pontuação.

## 📂 Estrutura Modular do Projeto

Para este desafio, decidi aplicar o conceito de **Clean Code** e **Modularização**, separando as responsabilidades em três arquivos distintos:

- **`src/herois.js`**: Armazena os dados brutos (nome, vitórias, derrotas) e contém a função que calcula o saldo líquido das partidas.
- **`src/classificador.js`**: Contém a lógica de decisão. Utiliza uma função genérica `calcularNivel(valorParaAnalise)` que recebe qualquer valor numérico e retorna o ranking correspondente, tornando o código reutilizável.
- **`src/index.js`**: O ponto de entrada da aplicação. Ele orquestra a comunicação entre os módulos, enviando o saldo calculado para o classificador e exibindo o resultado final.

`herois.js (Saldo)` ➔ `index.js` ➔ `classificador.js (Nível)` ➔ `Saída Console`

## 🚀 Conceitos Aplicados

- **Variáveis**: Armazenamento dinâmico de dados.
- **Operadores**: Cálculos matemáticos para obter o saldo.
- **Funções com Parâmetros**: Uso de parâmetros para tornar as funções independentes de variáveis externas.
- **Estruturas de Decisão**: Uso de `if/else` encadeados para a lógica de ranking.
- **CommonJS (module.exports/require)**: Organização profissional de arquivos em ambiente Node.js.

## 📊 Tabela de Níveis

| Saldo/Vitórias       | Nível    |
| :------------------- | :------- |
| Menor ou igual a 10  | Ferro    |
| 11 - 20              | Bronze   |
| 21 - 50              | Prata    |
| 51 - 80              | Ouro     |
| 81 - 90              | Diamante |
| 91 - 100             | Lendário |
| Maior ou igual a 101 | Imortal  |

## 🛠️ Tecnologias Utilizadas

- **JavaScript** (Lógica de programação)
- **Node.js** (Ambiente de execução)
- **Git/GitHub** (Versionamento de código)

## 💻 Como executar

1. Clone este repositório: `git clone https://github.com/Rodolpholn/-Calculadora-de-Partidas-Rankeadas`
2. Entre na pasta do projeto: `cd -Calculadora-de-Partidas-Rankeadas`
3. Entre na pasta src: `cd src`
4. Execute o projeto com o Node: node index.js
