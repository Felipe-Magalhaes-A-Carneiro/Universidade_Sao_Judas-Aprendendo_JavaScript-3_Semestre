/* Funções: JavaScript possui formas diferentes para se criar funções:
blocos de código com nome - ou não - que podem ser colocados em execução
em algum momento. A forma tradicional para criar funções em JavaScript
envolve a palavra funciont. */

function hello (){
    console.log("Oi");
}

hello(); 

//Obs.: Cuidado, aqui redefinimos a função sem parâmetros
function hello(nome){
    console.log("Hello, " + nome)
}

hello("Amanda");

function soma (a , b){
    return a + b;
}

const result = soma (2 , 6)
console.log(result);

/* é possível criar funções anônimas. Uma vez criadas, elas podem ser atribuídas
a variáveis ou constantes */

const dobro = function (n){
    return n * 2;
}