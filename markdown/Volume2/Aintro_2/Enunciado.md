# Operadores de igualdade e desigualdade

Operadores lógicos operações booleanas  ```true``` ou ```false```, em um valor. Esses também realizam uma comparações lógicas entre dois valores.

## Comparações

### Igualdade

Na linguagem de programação JavaScript existem dois operadores de comparação de igualdade:
*  **comparação abstrata** ```==```: Compara apenas o **valor** das variáveis.
Exemplo:
¹// Variavel do tipo string
let var1 = "0";
 
// Variavel do tipo numerico
let var2 = 0;
 
// Imprimindo o resultado da comparação
console.log(var1 == var2);
¹

*Output*

```true```

Mesmo sendo de tipos diferentes (var1 literal e var2 numérico) o resultado ainda foi verdadeiro

> ___

*  **comparação restrita** ```===```: Compara o **valor** e **tipo** das variáveis.
Exemplo:
¹// Variavel do tipo string
let var1 = "0";
 
// Variavel do tipo numerico
let var2 = 0;
 
// Imprimindo o resultado da comparação
console.log(var1 === var2);
¹

*Output*

```false```

___
___

### Desigualdade

Retorna ```true``` caso os valores comparados sejam diferentes, assim como as igualdades também possuem **comparação abstrata** ```!=``` e **comparação restrita** ```!==```
¹// Variavel do tipo string
let var1 = "0";
 
// Variavel do tipo numerico
let var2 = 0;
 
// Imprimindo o resultado da comparação
console.log(var1 != var2);
¹
*Output*

```false``` , já que 0 não é diferente de 0.

> ___

¹// Variavel do tipo string
let var1 = "0";
 
// Variavel do tipo numerico
let var2 = 0;
 
// Imprimindo o resultado da comparação
console.log(var1 !== var2);
¹
*Output*

```true``` , já que “0” em string é diferente de 0 numérico.
