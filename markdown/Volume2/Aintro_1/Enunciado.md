# Introdução à seleção condicional em JavaScript

O ```if…else``` é uma **estrutura de controle** que realiza determinada ação tendo uma **condição** como referência.

A sintaxe da estrutura de controle ```if``` é a seguinte:
¹if(condicao){
    // Código caso verdadeiro...
}
¹

>  ___

Podendo este conter ao seu fim o comando ```else``` o qual executará uma ação caso o ```if``` seja **falso**.

Vale notar que caso a **condição** do ```if``` seja atendida o código contido no ```else``` não será executado.
¹if(condicao){
    // Código caso verdadeiro...
} else{
    // Código caso falso...
}
¹

>  ___

Pode-se também acoplar outro ```if``` diretamente ao ```else```, possibilitando a criação de instruções mais complexas:
¹if(condicao){
    // Código caso verdadeiro...
} else if(outra_condicao){
    // Código caso falso e caso a "outra_condicao" seja verdadeira...
} else{
    // Se ambos forem falso
}
¹

 ___

## Exemplo de código:
¹// Declarando uma variavel fruta
let fruta = "uva";
 
if(fruta == "uva"){
    // Se a fruta for uva
    console.log("Eu gosto de uva!");
}
else if (fruta == "banana"){
    // Se a fruta for banana
    console.log("Eu amo banana!");
}
else{
    // Se a fruta não for uva nem banana
    console.log("Não gosto dessa fruta");
}
¹

*Output*

```Eu gosto de uva!```
