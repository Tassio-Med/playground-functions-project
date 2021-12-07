// Desafio 10
/*

*/
function techList() {
  // seu código aqui
}

// Desafio 11
/*
Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

O que será verificado:

Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais

Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações


*/
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
/*
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:

Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

O que será verificado:

Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.

Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.

Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
*/
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
