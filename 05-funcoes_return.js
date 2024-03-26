/* O return em JavaScript é uma instrução que permite que uma função retorne um
valor para o código que a chamou. Quando uma função alcança uma instrução return
ela para de executar e o valor especificado após o return é retornado como 
resultado da chamada da função. */


/* O uso do return é importante porque permite que uma função produza um resultado que pode ser utilizado em outras partes do programa. Exemplo: */

function soma (a , b){
    return a + b
};

let resultado = soma (3 , 5);

console.log(resultado);

/* O return também pode ser usado para retornar imediatamente de uma função sem 
especificar um valor, o que é útil em funções que não produzem um valor de retorno 
específico, ou quando queremos interromper a execução da função antes de atingir o 
final. Por exemplo: */

function imprimirMensagem(mensagem){
    if (!mensagem){
        return; // Retorna imediatamente se não houver mensagem
    }
    console.log(mensagem)
}

imprimirMensagem("Olá, mundo!"); // Saída: Olá, mundo!
imprimirMensagem(); //Nada é impresso, pois a função retorna imediatamente

/* Em resumo, o return é usado em funções JavaScript para retornar um valor
específico ou para interromper a execução da função e retornar imediatamente ao 
código que a chamou. */