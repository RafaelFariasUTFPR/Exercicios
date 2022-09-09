# Introdução ao JavaScript

	**Este capítulo foi criado com a disciplina Fundamentos de Programação TSI31B**

# Como executar seu programa

* Crie um arquivo **.html**;
	* Arquivos .html são documentos criados para formatação digital, hoje em dia é muito utilizado na web;
	* No momento que você abre um arquivo html no navegador você está criando uma **página da web** parabéns!

* Teremos a seguinte estrutura de código html:
¹<meta charset="UTF-8">
<script>
   // Seu código vai aqui
</script>
¹
> * ```<meta charset="UTF-8">```: significa que estaremos utilizando o **conjunto de caracteres** ```UTF-8``` .

> > * Curiosidade: UTF-8 significa que todos os caracteres terão 8 bits de tamanho, este consegue então armazenar até 1,112,064 caracteres diferentes.

> * ```<script>```: Essa é uma *tag* de html que indica ao navegador que deverá **interpretar** o código nela contido.

> * ```</script>```: *Tag* de fechamento no html, significa que o interpretador só deve executar até ali.

* Esse arquivo ```.html``` pode então ser executado diretamente no navegador.

___

# Resumo da sintaxe

## Comentários:
* Comentários **não serão interpretados**, então você pode utilizá-lo para adicionar informações relevantes ao seu código, assim como para simplesmente desabilitar uma linha de código.

* Comentários no JavaScript podem ser feitos de duas formas:
	* ```//``` Cria um comentário de linha única.
	* ```/*       */``` Cria um comentário de múltiplas linhas.
¹// Este é um comentário de uma linha
 
 
/* Esse
é
um
comentário
de
várias
linhas
*/¹

___

# Criando variáveis
* Temos três opções:
	* ```var```: Cria uma variável global (hoje em dia não é mais recomendado declarar variáveis dessa maneira, recomenda-se a utilização do ```let```);

	* ```let```: Cria uma variável no presente escopo;

	* ```const```: Cria uma variável que não pode ser alterada.

¹var minhaVariavel; // Declara uma variavel chamada minhaVariavel
 
let valor = 50; // Declara uma variável chamada valor e atribui 50 como seu valor
 
const numeroDeCarros = 2; // Declara uma variavel CONSTANTE chamada numeroDeCarros e atribui 2 como seu valor
¹

___

# Entrada de informação
* Para ler um valor do usuário podemos usar a **função** ```prompt()```.

* Essa função pode receber como parâmetro uma ```string``` e retorna o valor que o usuário colocar.

¹// A função prompt imprime na tela "Coloque o valor"
// A variável valor RECEBE o que o usuário colocar
var valor = prompt("Coloque o valor");¹

* Deve-se tomar cuidado com o tipo de dado que está sendo lido, por exemplo talvez você queira operar como um numéro porém a variável foi passada como texto. Nesses casos o texto pode ser convertido para número. A seguir algumas funções que fazem isso:
	* ```parseFloat()```: Recebe um valor do tipo texto e retorna um valor do tipo **numérico real**;

	* ```parseInt()```: Recebe um valor do tipo texto e retorna um valor do tipo **numérico inteiro**;

	* ```Number()```: Recebe um valor do tipo texto e retorna um valor do tipo **numérico**;


¹var valor; // Criando uma variável chamada valor
 
// A seguir estaremos recebendo um valor do usuário e o transformando em um número
 
valor = parseFloat(prompt("Coloque o valor")); // Transforma em numero real
 
valor = parseInt(prompt("Coloque o valor")); // Transforma em numero inteiro
 
valor = Number(prompt("Coloque o valor")); // Transforma em numero real¹

___

# Saída de informação
* Serão apresentados 3 métodos diferentes para apresentar informações:
	* ```console.log();```: Escreve a informação no **console**;

	* ```document.write()```: Escreve a informação na **página do navegador**;

	* ```alert()```: Apresenta um **alerta** na tela do usuário com a sua informação;

¹console.log("Minha bola custa " + 30 + " Reais") // Escreve "Minha bola custa 30 reais"

document.write("Tenho ", 20, " anos"); // Escreve "Tenho 20 anos"

alert("Eu sou um alerta"); // Escreve "Eu sou um alerta"¹

