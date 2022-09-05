# Métodos de um vetor

No JavaScript arrays são um tipo de **objeto**, objetos podem guardar inúmeros tipos de variáveis dentro dele, por exemplo podemos criar um vetor contendo 5 elementos:

¹meuVetor = [1, 5, -1, 23, -42]¹

Porém essa variável ```meuVetor``` guarda mais do que apenas os valores passados, ela também pode guardar variáveis como o seu **tamanho** ```length```. Podemos acessar uma propriedade de um vetor através da notação ```.```.

Exemplo, chamando o método ```length``` do vetor ```meuVetor```.

¹console.log(meuVetor.length);¹

*Output*

```5```

Dentro do objeto ```Array``` (vetor) também temos outros **métodos** disponíveis, como por exemplo o ```pop()```, ele **remove o último elemento** da array:
¹
let meuVetor = [1, 5, -1, 23, -42];
meuVetor.pop();
for(let i = 0; i < meuVetor.length; i++){
    console.log(meuVetor[i]);
}
¹

*Output*

```1```
```5```
```-1```
```23```

Note que o elemento ```-42``` foi removido.

Temos também o método ```push()```, ele **adiciona um elemento ao fim** do vetor. Exemplo:
¹let meuVetor = [1, 5];
meuVetor.push(2);
for(let i = 0; i < meuVetor.length; i++){
    console.log(meuVetor[i]);
}
¹

*Output*

```1```
```5```
```2```

Além de outros métodos, podem ser encontrados [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)




