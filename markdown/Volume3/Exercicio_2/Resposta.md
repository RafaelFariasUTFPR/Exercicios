## Resposta

¹var numero = parseFloat(prompt("Insira um número"));
 
// Esse (numero > 0) retornará true ou false
switch(numero > 0){
    case true:
        console.log(numero + " é positivo!");
        break;
    case false:
        switch(numero == 0){
            case true:
                console.log(numero + " é zero!");
                break;
            case false:
                console.log(numero + " é negativo!");
                break;
        }
}¹
