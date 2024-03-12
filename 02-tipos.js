/* Como mencionado anteriormente, Javascript é uma linguagem dinamicamente tipada. 
Veja os tipos existentes. É importante observar que valores primitivos são imutáveis.
Objetos podem ser mutáveis ou imutáveis*/

/*
Primitivos: boolean, null, number, string, undefined
Objetos: JSON, Array, Classes Wrapper (String, Number, Boolean), Date, Math, Funções

*Mutáveis*: Você pode modificar o conteúdo de um objeto depois de criá-lo. Por exemplo, 
você pode adicionar, remover ou alterar propriedades.
*/

let pessoa = { nome: 'João', idade: 25 };
pessoa.idade = 26; // Modificando o valor da propriedade idade, já que é mutável

/*Imutáveis: Certos tipos de objetos em JavaScript são projetados para serem imutáveis, 
o que significa que, após criados, não podem ser alterados. Isso é comum em objetos usados 
para representar datas, strings ou valores constantes. */

let stringOriginal = 'Olá';
let novaString = stringOriginal.toUpperCase(); /* Cria uma nova string em caixa alta sem 
modificar a original */

/*Coerção: Algumas linguagens de programaçao possuem o mecanismo conhecido como coerção,
do inglês cast. Quando dois primitivos de tipos diferentes estão envolvidos em uma
empressão, um deles pode ter seus tipo alterado para que a expressão faça sentido ou
implícita.*/

const n1 = 2;
const n2 = '3';

//coerção implícita de n1, concatenação acontece:

const n3 = n1 + n2;
console.log(n3);

//coerção explícita, soma acontece:

const n4 = n1 + Number(n2)
console.log(n4);
