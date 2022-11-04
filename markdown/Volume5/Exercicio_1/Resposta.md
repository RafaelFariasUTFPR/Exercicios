## Resposta

```.html```
¹<meta charset="utf-8">
<script src="funcJS.js"></script>
<script>
    var num = Number(prompt("Insira um número"));
    document.write("O cubo de ", num, " é: ", cubo(num));
</script>¹

```.js```
¹// Criando uma função chamada cubo que recebe como argumento o numero n
function cubo(n)
{
    // Retorna n³
    return n * n * n;
}¹
