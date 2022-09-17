## Resposta 

**Arquivo principal** em ```.html```.
¹<meta charset="UTF-8">
<script src="operacoes.js"></script>
<script>
    let subRotina = parseInt(prompt("Selecione a sub-rotina\n(1) - O número é par ou ímpar?\n(2) - Checando se o triângulo é válido\n(3) - Números de dias em um mês\n(4) - Calculadora simples"));
   
    switch(subRotina){
        case 1:
            numeroParOuImpar();
            break;
        case 2:
            trianguloValido();
            break;
        case 3:
            diasNoMes();
            break;
        case 4:
            calculadora();
            break;
        default:
            alert("Sub-rotina inválida!");
    }
 
</script>¹

___

Arquivo com as **funções** ```.js```.
¹function numeroParOuImpar(){
    let var1 = parseFloat(prompt("Insira um numero para a var1"));
   
    if(var1 % 2){
        document.write(`${var1} é ímpar`);
    }
    else{
        document.write(`${var1} é par`);
    }
}
 
function trianguloValido(){
    let angulo1 = parseFloat(prompt("Insira um numero para o angulo 1"));
    let angulo2 = parseFloat(prompt("Insira um numero para o angulo 2"));
    let angulo3 = parseFloat(prompt("Insira um numero para o angulo 3"));
   
    let somaDosAngulos = angulo1 + angulo2 + angulo3;
   
    if(somaDosAngulos == 180)
        document.write("O triângulo é válido!");
    else
        document.write("O triângulo é inválido!");
}
 
function diasNoMes(){
    let mes = parseInt(prompt("Insira o número do mês do ano 2022"));
 
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
        default:
            alert("MÊS INVÁLIDO");
    }
    document.write("O ", mes, "° mês tem: ", numeroDeDias, " dias.");
}
 
function calculadora(){
    var n1 = parseFloat(prompt("Numero 1"));
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
   
    document.write(n1, operacao, n2, "=", res);
}¹
