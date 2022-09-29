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

```.js```
¹function calcularFatorial(){
    for(let i = numero-1; i > 0; i--){
        resultado = i * resultado;
    }
 
}
¹
