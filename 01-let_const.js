//Declarando constantes:

const nome = "José"; // Perceba que o JS é uma linguagem dinamicamente tipada,
const numero = 27; // Não precisa definfir o seu tipo antes, no caso int e no de cima String

//aspas simples e duplas têm o mesmo efeito:
const sexo = 'M';
const endereco = 'Rua K, 12';

//Declarando variáveis

//let: variável local com escopo de bloco
let a = 2;
let b = "abc";

//var: seu escoco é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"; 

/*Obs.: O let foi introduzido na especificação ES6. É preferivel utilizá-la pois
o funcionamento de var pode ser contraintuitivo, sendo mantida na inguagem apenas
por retrocompatiblidade*/

var linguagem = "JavaScript";
console.log("Aprendendo " + linguagem); // + é usado para Concatenar

//nome pode ser redeclarada:
var linguagem = "Java";
console.log("Aprendendo " + linguagem);

// escopo não restrito a bloco
var idade = 18;

/* exibe udefined. Ou seja, a variável já existe aqui, só não tem valor
atribuido*/

//Ela é içada - do inglês hoist - para fora do bloco if
console.log('Oi,' + identidade);
if (idade >= 18){
    var identidade = "João";
    console.log('Parabéns, ' + identidade + '. Você pode dirigir.');
}
//ainda existe aqui
console.log('Até mais, ' + identidade +'.');

