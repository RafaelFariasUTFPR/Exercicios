## Resposta 
¹<meta charset="UTF-8">
<script>
 
    var resultado = 0;
 
    var numero = 2; //O primeiro numero primo é 2
 
    while(resultado <= 100){
 
        // Checando se o numero é primo
        var i = 2;
        var ehPrimo = true;
        while(i < numero){
            if(numero % i == 0){
                ehPrimo = false;
                break;
            }
            i++;
 
        }
        if(ehPrimo){
            resultado +=numero;
            document.write(numero, " é primo<br>");
        }
 
        numero++;
    }
 
    document.write("<br>Resultado: ", resultado);
 
 
 
</script>¹
