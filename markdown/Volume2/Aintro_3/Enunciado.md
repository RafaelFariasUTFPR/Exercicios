# Operadores relacionais e lógicos

## Operadores Relacionais

Operadores relacionais apuram a **relação** entre dois operadores retornando ```true``` ou ```false```.

Os operadores são os seguintes:
* Maior que ```>```;
* Menor que ```<```;
* Maior ou igual que ```>=```;
* Menor ou igual que ```<=```.

Exemplo:
¹console.log(3 > 2) //imprime true
console.log(3 < 2) //imprime false
console.log(3 >= 3) //imprime true
console.log(3 <= 2) //imprime false
¹

___

## Operadores Lógicos

Operadores lógicos realizam **verificações lógicas** entre dois valores **booleanos**.

Os operadores são:
* “E” lógico ```&&```:
	Compara dois valores e retorna ```true``` se **ambos** forem ```true```.

	![Tabela verdade and](./markdown/Volume2/Aintro_3/and.png)

    Exemplo:
¹// Exemplo de como ler:

// Verdade e verdade são verdade?
console.log(true && true) //imprime true

// Verdade e falso são verdade?
console.log(true && false) //imprime false

// (1 é igual a 1) e (5 é menor que 10) são verdade?
console.log(1 == 1 && 5 < 10) //imprime true
¹

___

* “Ou” lógico ```||```:
	Compara dois valores e retorna ```true``` se **um ou mais** forem ```true```.

	![Tabela verdade or](./markdown/Volume2/Aintro_3/or.png)

	Exemplo:
¹// Exemplo de como ler:

// Verdade ou falso é verdade?
console.log(true || false) //imprime true

// Verdade ou verdade é verdade?
console.log(true || true) //imprime true

// Falso ou falso é verdade?
console.log(false || false) //imprime false

// (1 é igual a 1) ou (1 é menor que 99)?
console.log(1 == 1 || 1 > 99) //imprime true
¹

___

* Negação Lógica ```!```:
	Retorna a **negação** ou seja, o **inverso** de um valor booleano:

    ![Tabela verdade not](./markdown/Volume2/Aintro_3/not.png)

	
Exemplo:
¹console.log(!false) //imprime true
console.log(!true) //imprime false
¹
