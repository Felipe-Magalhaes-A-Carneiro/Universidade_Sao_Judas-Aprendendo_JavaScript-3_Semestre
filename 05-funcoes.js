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

const res = dobro(4);
console.log(res);

// valor padrão para o marâmetro
const triplo = function (n = 5){
    return 3 * n;
}

console.log(triplo());
console.log(triplo(10));

/* A terceira possibilidade envolve o recurso chamado 'arrow function'. Quando
escrevemos uma arrow function, especificamos somente a sua lista de parâmetros
e seu corpo. Há um simbolo => - dai o nome arrow - entre eles. Uma arrow function
não tem nome e também pode ser armazenada em cosntantes ou variáveis. Além disso,
arrow functions têm as seguintes caracteristicas.

- Quando a lista de parâmetros possui um ùnico argumento, os parênteses podem 
ser omitidos.

- Quando o corpo possui uma ùnica instrução, as chaves podem ser devolvido, a instruçâo
'return' é opcional: Se usar as chaves deve-se usar o 'return'. Caso contrário, ele
não pode ser usado.*/

const ola = () => console.log("Hello");
ola();

const dobrar = (valor) => dobrar * 2;
console.log(dobrar(10));

const triplicar = (valor) => {
    return valor * 3;
}

console.log(triplicar(10));
// e agora?

const ePar = (numero) => {
    numero % 2 === 0;
}

console.log(ePar(10));