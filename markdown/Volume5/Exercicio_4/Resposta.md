## Resposta

```.html```
¹<meta charset="utf-8">
<script src="funcJS.js"></script>
<script>
    var num = Number(prompt("Insira um número"));
   
    if(ehNumeroArmstrong(num))
        document.write(num, " é um numero Armstrong ");
    else
        document.write(num, " não é um numero Armstrong ");
 
 
</script>¹

```.js```
¹function ehNumeroArmstrong(numero){
    var numeroOriginal = numero;
    var qnt = quantidadeDeDigitos(numero);
    var resultado = 0;
   
    // loop pelos dígitos
    for(var i = 0; i < qnt; i++){
        var digito = numero / potencia(10, quantidadeDeDigitos(numero)-1);
        digito = Math.floor(digito);
        numero = numero - digito * potencia(10, quantidadeDeDigitos(numero)-1);
        resultado += potencia(digito, qnt);
    }
    if(numeroOriginal == resultado)
        return true;
    return false
}
 
function quantidadeDeDigitos(numero){
    var qnt = 0; // Variavel que guarda o total de dígitos
 
    while(numero > 0){
        // "Move" a virgula um número para cima
        numero = numero / 10;
 
        // Arredonda para o número inteiro inferior
        numero = Math.floor(numero);
 
        // Incrementa a quantidade de digitos
        qnt++;
    }
    return qnt;
}
 
// Função que retorna um numero elevado a alguma potencia
function potencia(numero, pot){
    var result = 1;
 
    // Executa o codigo "pot" vezes
    for(var i = 0; i < pot; i++){
        result = result * numero;
    }
   
    return result;
}¹
