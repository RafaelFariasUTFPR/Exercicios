## Resposta

Este exercício faz uso de dois comparadores lógicos:
* O **and** (e) ```&&```, este retorna **verdadeiro** se ambos casos forem```true```;
* O **or** (ou) ```||```, este retorna **verdadeiro** se qualquer um dos casos forem ```true```.

![Tabela de verdades](./markdown/Volume1/Exercicio_4/table.png)

¹// Declarando o tamanho dos lados
let lado1 = prompt("Insira um numero para a o lado 1");
let lado2 = prompt("Insira um numero para a o lado 2");
let lado3 = prompt("Insira um numero para a o lado 3");
 
if(lado1 == lado2 && lado1 == lado3){
    // Se todos os lados forem iguais
    console.log("O triangulo é equilatero!");
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    // Se apenas 2 lados sejam iguais
    console.log("O triangulo é isósceles!");
}
else{
    // Se nenhum lado for igual
    console.log("O triangulo é escaleno!");
}
¹
