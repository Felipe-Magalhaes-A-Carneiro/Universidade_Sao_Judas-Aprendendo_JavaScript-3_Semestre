/* Parâmetros: Um parâmetro em JavaScript é um valor que você passa para uma função quando a chama. Esses parâmetros são usados ​​dentro do corpo da função para realizar operações ou cálculos. Eles permitem que você generalize sua função para que ela possa aceitar diferentes valores e realizar as mesmas operações.

Para identificar e usar um parâmetro em JavaScript, você precisa declará-lo dentro dos parênteses da definição da função. Exemplo: */

// Definição de uma função que recebe dois parâmetros
function menos (a , b){
    return a - b;
}

// Chamando a função e passando argumentos para os parâmetros
let result = menos (4 , 3);
console.log(result); //Saída: 1

/* No exemplo acima, a e b são os parâmetros da função menos. Quando chamamos a 
função menos(4, 3), estamos passando os valores 4 e 3 como argumentos para os 
parâmetros a e b, respectivamente. Dentro do corpo da função, esses valores são 
usados ​​para realizar a subtração, e o resultado é retornado.

Os parâmetros são essenciais em JavaScript porque permitem que suas funções sejam 
mais flexíveis e reutilizáveis, aceitando diferentes valores como entrada e 
produzindo resultados com base nesses valores. */