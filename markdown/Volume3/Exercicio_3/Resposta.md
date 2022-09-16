# Números de dias em um mês

Crie um programa que recebe o **mês** e retorna o **número de dias** presentes nesse mês.

Use o **presente ano** para saber o número de dias em cada mês.

## Resposta 

Algo único que fiz nessa resposta é a **alteração de tipo** de maneira dinâmica, a variável ```numeroDeDias``` começa sendo do tipo **literal** e posteriormente é alterada para o tipo **numérico inteiro**.

Observe a utilização do ```default``` este funciona como uma rede de erros, onde qualquer **caso** que não esteja presente nos ```case```.

¹let mes = parseInt(prompt("Insira o número do mês do ano 2022"));
 
// Aqui estou fazendo uso de uma característica única do JavaScript
// onde começarei definindo numeroDeDias como um literal e posteriormente
// o mudo para tipo numérico.
let numeroDeDias = "Inválido";
 
switch(mes){
    case 1:
        numeroDeDias = 31;
        break;
    case 2:
        numeroDeDias = 28;
        break;
    case 3:
        numeroDeDias = 31;
        break;
    case 4:
        numeroDeDias = 30;
        break;
    case 5:
        numeroDeDias = 31;
        break;
    case 6:
        numeroDeDias = 30;
        break;
    case 7:
        numeroDeDias = 31;
        break;
    case 8:
        numeroDeDias = 31;
        break;
    case 9:
        numeroDeDias = 30;
        break;
    case 10:
        numeroDeDias = 31;
        break;
    case 11:
        numeroDeDias = 30;
        break;
    case 12:
        numeroDeDias = 31;
        break;
    default: // default é chamado quando nenhum dos casos forem usados
        alert("MÊS INVÁLIDO");
}
 
document.write("O ", mes, "° mês tem: ", numeroDeDias);¹



# Positivo ou negativo com o switch

Utilize o ```switch``` ```case``` para checar se um número é negativo, positivo ou 0.

* Esse exercício é um desafio 😊;
* Utilize **apenas** o ```switch``` para cumprir a tarefa;
* Esse é um exercício que requer um entendimento bom da lógica de execução.

## Resposta

¹var numero = parseFloat(prompt("Insira um número"));
 
// Esse (numero > 0) retornará true ou false
switch(numero > 0){
    case true:
        console.log(numero + " é positivo!");
        break;
    case false:
        switch(numero == 0){
            case true:
                console.log(numero + " é zero!");
                break;
            case false:
                console.log(numero + " é negativo!");
                break;
        }
}¹



# Criando uma calculadora

Crie uma **calculadora simples** utilizando o ```switch```.

Essa calcula deve ser capaz de realizar **soma**, **subtração**, **divisão** e **multiplicação** entre **dois números**.

Apresente o **resultado** ao usuário.


## Resposta

¹var n1 = parseFloat(prompt("Numero 1"));
var n2 = parseFloat(prompt("Numero 2"));
var operacao = prompt("Operação");
 
var res;
 
switch(operacao){
    case '+':
        res = n1 + n2;
        break;
    case '-':
        res = n1 - n2;
        break;
    case '*':
        res = n1 * n2;
        break;
    case '/':
        res = n1 / n2;
        break;
    default:
        alert("Operação inválida");
        break;    
}
 
document.write(n1, operacao, n2, "=", res);¹



