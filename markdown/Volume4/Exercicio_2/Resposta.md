# Resposta 
¹<meta charset="UTF-8">
<script>

    var palavra1 = prompt("Insira uma palavra");

    // A primeira vez executa o loop sem checar nada
    do{
        var palavra2 = prompt("Insira uma palavra para ser checada");
    }while(palavra1 != palavra2); //Caso a condição palavra1 != palavra2 seja falsa ele retornará ao inicio do loop

    // A linha abaixo somente será executada caso as palavras sejam iguais
    document.write("As palavras \"", palavra1, "\" e \"", palavra2, "\" são iguais");

</script>¹