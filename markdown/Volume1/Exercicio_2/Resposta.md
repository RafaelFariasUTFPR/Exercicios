## Resposta

¹// Recebendo as variáveis
let distancia = Number(prompt("Distância da viagem em [km]"));
let consumo = Number(prompt("Consumo em [km/l]"));
let valorDoCombustivel = Number(prompt("Valor do combustível em [R$]"));
 
// Calculando
let combustivelGasto = distancia / consumo;
let totalGasto = combustivelGasto * valorDoCombustivel;
 
// Imprimindo os resultados com apenas 2 casas decimais
document.write("Foram consumidos: ", combustivelGasto.toFixed(2), " litros de combustivel.<br>");
document.write("A viagem custou: ", totalGasto.toFixed(2), " reais");
¹
