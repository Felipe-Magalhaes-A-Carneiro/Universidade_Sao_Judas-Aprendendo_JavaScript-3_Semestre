/* Como mencionado anteriormente, Javascript é uma linguagem dinamicamente tipada. 
Veja os tipos existentes. É importante observar que valores primitivos são imutáveis.
Objetos podem ser mutáveis ou imutáveis*/

/*
Primitivos: boolean, null, number, string, undefined
Objetos: JSON, Array, Classes Wrapper (String, Number, Boolean), Date, Math, Funções
*/

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
