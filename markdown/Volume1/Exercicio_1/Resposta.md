## Resposta
Este exercício faz uso da seleção condicional, usando o ```if``` e ```else```, assim como os operadores lógicos ```>```, ```<``` e ```!=``` a resposta pode ser vista a seguir:

¹let a = 10;
let b = 0;
 
if(a > b && b != 0)
    console.log(a / b);
else if(a < b)
    console.log(a * b);
else
    console.log(a - b);
¹

Como um detalhe extra pode-se notar que na linha 9 a operação ```a - b``` sempre será ```a```, já que este comando só será executado caso ```b == 0```,  e  ```a - 0 == a``` é verdadeiro.

