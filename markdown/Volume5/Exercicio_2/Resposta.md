## Resposta

¹function quantidadeDeDigitos(numero){
    var qnt = 0; // Variavel que guarda o total de digitos
 
    while(numero > 0){
        // "Move" a virgula um numero para cima
        numero = numero / 10;
 
        // Arredonda para o número inteiro inferior
        numero = Math.floor(numero);
 
        // Incrementa a quantidade de digitos
        qnt++;
    }
    return qnt;
}¹
