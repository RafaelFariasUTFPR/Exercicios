# Criando e acessando vetores

Vetores são usados para armazenar uma lista de itens, por exemplo ao invés de usarmos

¹let marca1 = "Ford";
let marca2 = "Volvo";
let marca3 = "BMW";
¹

podemos usar:
¹let marca = ["Ford", "Volvo", "BMW"];¹
___

## Criando vetores

A **sintaxe** da criação de um vetor na linguagem **JavaScript** é a seguinte:
¹let nome_do_vetor = [item1, item2, ...];¹

Temos várias formas de criar um vetor, como por exemplo:
¹let marca = ["Saab", "Volvo", "BMW"];¹

¹let marca = [
  "Saab",
  "Volvo",
  "BMW"
]; 
¹

> ___

Podemos também criar um vetor e **posteriormente** definir qual o valor de seu elemento:
¹const marca= [];
marca[0]= "Saab";
marca[1]= "Volvo";
marca[2]= "BMW";
¹

> ___

Existe também o método menos popular, utilizando a palavra chave ```new``` e especificando o tipo ```Array```.
¹let marca= new Array("Saab", "Volvo", "BMW");¹

> ___

Um vetor também pode guardar mais de um tipo de elemento:

¹let marca = ["Saab", 2, true];¹

___

## Acessando vetores

Para acessar um elemento de um vetor utilizasse o ***index*** (índice) do elemento.

Importante lembrar que índices iniciam no valor 0

![Diagrama de fluxo](./markdown/Volume6/Exercicio_1/imgIndex.png)
___
Acessando elementos de um vetor exemplo:

¹let meu_vetor = ["Banana", "Maçã", "Uva"];
console.log(meu_vetor[1]);
¹

*Output*

```Maçã```
___
