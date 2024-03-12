/*Operador de comparação:

== simbolo usado que apenas leva em conta somente os valores envolvidos. Caso sejam
diferentes, ocorrerão coerções implícitas, as quais nem sempre têm o funcionamento
intuitivo.

=== simbolo que não realiza coerção. O resultado da comparação é true caso os valores
e seus respectivos tipos forem iguais. Caso contrário, o resultado é false*/

console.log(1 == 1)//true
console.log(1 == "1")//true exemplo perfeito de coerção implicita, logo o == não é confiavel aqui
console.log(1 === 1)//true
console.log(1 === "1")//false exemplo perfeito de não coerção, logo o === está correto
// 1 é inteiro e o "1" é uma String, logo não são iguais
console.log(true == 1)//true
console.log(1 == [1])//true
console.log(null == null)//true
console.log(null == undefined)//true
console.log([] == false)//true
console.log([] == [])//false

/*Obs.: Não é recomendado o uso do operador == , embora ele ainda seja usado nas versões
mais modernas do JavaScript por razões de retrocompatibilidade. Ver a tabela no link:

https://dorey.github.io/JavaScript-Equality-Table/unified/

*/