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
