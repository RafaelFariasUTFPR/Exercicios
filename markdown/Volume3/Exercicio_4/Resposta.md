## Resposta
A seguir demonstrarei duas formas de resolver este problema, uma é a forma mais **eficiente** utilizando o ```for```, e a outra é utilizando o iterador ```foreach```.

## Utilizando o ```for``` loop:
* Neste **Laço de repetição** é necessário iterar manualmente sobre cada elemento, tem o benefício de ser **mais eficiente** do que o ```forEach```.

¹// Criando um vetor e atribuindo valores
let vetor = [1, 5, -1, 23, -42];
 
// Iterando sobre todos os elementos do vetor
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
        // Se o elemento no index i for menor que 0
        console.log(vetor[i]);
    }
}
¹

___

## Utilizando o ```forEach```:
* Neste **Método** os elementos são iterados automaticamente.

¹// Criando um vetor e atribuindo valores
let vetor = [1, 5, -1, 23, -42];
 
// Usando o forEach para iterar sobre o vetor
vetor.forEach(element => {
    if(element < 0){
        // Se o elemento for menor que 0
        console.log(element);
    }
});
¹
