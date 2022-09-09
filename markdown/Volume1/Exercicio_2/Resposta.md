## Resposta

Este exercício faz uso do operador **módulo** ```%```, este operador retorna o **resto** da divisão de 2 números, dessa forma podemos utilizá-lo para definir se um número é par ou ímpar.

¹// Declarando a var1
let var1 = prompt("Insira um numero para a var1");
 
 
// Modulo da "var1", operador "%"
if(var1 % 2 == 1){
    // Imprimindo se o resultado for == 1
    console.log(`${var1} é ímpar`);
}
else{
    // Imprimindo se o resultado não for == 1
    console.log(`${var1} é par`);
}
¹

Note que o número 1 também equivale a resposta booleana ```true``` dessa forma o seguinte código também é válido
¹// Declarando a var1
let var1 = prompt("Insira um numero para a var1");
 
 
// Modulo da "var1", operador "%"
if(var1 % 2){
    // Imprimindo se o resultado for == 1
    console.log(`${var1} é ímpar`);
}
else{
    // Imprimindo se o resultado não for == 1
    console.log(`${var1} é par`);
}
¹
