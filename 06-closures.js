/* Closures: Para entender o que é um closure, é importante estudar e entender alguns
conceitos. Primeiro, em JavaScript, funções são 'cidadãs de primeira classe'.
Informalmente, um cidadão de primeira classe em uma linguagem de programação é uma
entidade que oferece suporte a operações como as seguintes.

- Ser passada como argumento para uma função.
- Ser devolvida por uma função.
- Ser atribuida a uma variável.

Vou mostrar como as funçãoes em JavaScript podem estar envolvidas em todas as operações
mencionadas. Há também o conceito de 'função de alta ordem'. É  aquela que recebe pelo
menos uma função como parâmetro e/ou devolve uma função quando seu processamento termina
*/


/* Uma função pode er atribuída a uma variável: */

let umaFuncao = function(){
    console.log("Fui armazenada em uma variavel");
}

// e pode ser chamada assim:
umaFuncao();


/* f recebe uma função como parâmetro e, por isso é uma função de alta ordem.
Por devolver uma função, g também é de alta ordem. */

function f (funcao) {
    //chamando a função
    //note como a tipagem dinâmica tem seu preço
    funcao();
}

function g (funcao){
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}

//f pode ser chamada assim:
f (function(){
    console.log("Estou sendo passada para f");
})

// e g pode ser chamada assim:
const gResult = g();
gResult();
// e assim também:
g()()

// outros testes:
/* f chama g, que somente devolve uma função. Nada é exibido */
f(g);

/* f chama a função devolvida por g
"Fui criada por g" é exibido. */
//f(g());

/* tenta chamar o qe a fnção criada por g devolve. Ela não devolve coisa alguma.
Por isso, um erro - somente em tempo de execução - acontece. */
//f(g()());

//O que acontece?
//f(1);

/* Uma função, quando defnida por outra, é chamada função interna e tem dois
escopos: o escopo interno e o escopo externo. Seu escopo interno é delimitado
pelas chaves que definem seu corpo. Seu escopo externo é delimitado pelas chaves
que definem o corpo da função que a define. Seu escopo externo é também chamado
de escopo léxico. Uma função interna pode acessar as variáveis definidas em seu
escopo externo */

function a(){
    let nome = "João";
    function b (){
        console.log(nome);
    }
    b();
}
a();

function ola(){
    let nomeNovo = "Ana";
    return function (){
        console.log("Olá, Ana");
    }
}


/*perceba que  aqui a função ola já teminou. É de se esperar que a variável nome 
já não possa ser acessada*/
let olaResult = ola();
olaResult();

//também vale com parâmetros
function saudacoesFactory(saudacao, nomeNovo){
    return function(){
        console.log(saudacao + ", " + nomeNovo)
    }
}

let olaJoao = saudacoesFactory("Olá" , "João");
let tchauJoao = saudacoesFactory("Tchau" , "João");

olaJoao();
tchauJoao();

// DEFINIÇÃO
/* Uma função interna em conjunto com as variáveis de seu escopo externo é o que
chamamos de closure */

//ATENÇÃO
/* O funcionamento de funções envolvendo closures, em alguns casos, pode ser
contra-intuitivo */

/* O funcionamento de funções envolvendo closures, em alguns casos, pode ser
contra-intuitivo.*/

function eAgora(){
    let cont = 1;
    function f1 (){
        console.log(cont);

    }
    cont ++;
    function f2(){
        console.log(cont);
}

//JSON contendo as duas funções
return {f1, f2}
}

let eAgoraResult = eAgora();

/* neste momento, a funcão eAgora já executou ´por completo e a variável
const já foi incrementada. Seu valor final é mantido e, assim, ambas f1 e
f2 exibirão 2.  */

eAgoraResult.f1();
eAgoraResult.f2();