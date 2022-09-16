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
