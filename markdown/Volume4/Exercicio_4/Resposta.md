## Resposta

```.html```
¹<meta charset="UTF-8">
<script src="fatorial.js"></script>
<script>
 
var numero = parseInt(prompt("Insira um número"));
var resultado = numero;
 
calcularFatorial();
 
document.write(numero, "! = ", resultado);
 
 
</script>¹

___

```.js```
¹function calcularFatorial(){
    // Cria uma variavel que será decrementada
    var subNumero = numero - 1;
 
    while(subNumero > 0){
        resultado = subNumero * resultado;
       
        // Decrementa o numero por 1
        subNumero--;
    }
}¹
