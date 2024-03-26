// Usando métodos em strings

let texto = "Olá, Felipe!";
let textoEmMinusculo = texto.toLowerCase();
console.log(textoEmMinusculo);

//Usando métodos em arrays

let numeros = [3 , 1 , 4 , 1 , 5 , 9];
let soma = numeros.reduce((total, numero) => total + numero, 0);
console.table(numeros);
console.log(soma); //Saída: 23

//Usando métodos em objetos
let pessoa = {
    nome: "Felipe",
    idade: "31",
    cumprimentar: function(){
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade +
        " anos."
    }
};

console.log(pessoa.cumprimentar()); //Saída: Olá, meu nome é Felipe e eu tenho 31 anos.

/* Para saver a lista de métodos em JavaScript, utilize o arquivo 04-vetores_metodos_lista.txt */