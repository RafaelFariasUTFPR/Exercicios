## Resposta

¹// Declarando as variaveis
 
// Valor em kWh consumido
let energia = 300;
 
// Duplicando a variavel para poder apresentar ao final
let consumo = energia;
 
//Variavel que guardará o valor da conta calculado
let total = 0;
 
if(energia > 50){
    // Se o consumo for maior que 50 kWh
    total += 50 * 0.2;
    energia -= 50;
 
    if(energia > 100){
        // Se o consumo for maior que 50 + 100 kWh
        total += 100 * 0.3;
        energia -= 100;
 
        if(energia > 0){
            total += energia * 0.5;
            total *= 1.2;
        }
    }
    else{
        // Se o consumo for menor que 150
        total += energia * 0.3;
    }
}
else{
    // Se o consumo for menor que 50 kWh
    total += energia * 0.2;
}
 
// Imprimindo o valor calculado
console.log(`Consumindo ${consumo}kWh o valor da conta será: ` + total);
¹
