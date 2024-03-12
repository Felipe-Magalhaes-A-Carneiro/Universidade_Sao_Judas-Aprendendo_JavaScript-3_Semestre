//Vetores (Arrays) possuem diversos métodos utilitários.

//declaração:
v1 = [];

v1 [0] = 3.4; // ou seja, eu pedi para que em [0] fique armazenado o valor 3.4
v1 [10] = 2;
v1 [2] = "abc";

//Aqui, vi v1 tem comprimeiro igual a 11, logo 0 a 10 temos 11 index de comprimento total
console.log(v1.length);

//inicializando na declaração
v2 = [2, "abc", true]
console.log(v2);

//iterando
for(let i = 0; i < v2.length; i++){
    console.log(v2[i]);
}

const nome = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

console.table(nome); // método table fará você ver de forma mais clara a tabela que ele forma

const apenasComA = nome.filter((n) => n.startsWith("A"));
console.log(apenasComA);

const res = nome.map((nome) => nome.charAt(0));
console.log(res);

const todosComecamComA = nome.every((n) => n.startsWith("A"));
console.log(todosComecamComA);

const valores = [1,2,3,4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma);