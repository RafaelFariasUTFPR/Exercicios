## Resposta

¹let velocidade = Number(prompt("Insira a velocidade do objeto em [kt]"));
let altitude = Number(prompt("Insira a temperatura do ar em [ft]"));
 
// Convertendo de kt para m/s
let velocidadeSI = velocidade * 0.514444;
 
let temperatura = 15 + (-2 * (altitude / 1000))
 
let velDoSom = 331 + (0.6 * temperatura);
let mach = velocidadeSI / velDoSom;
 
console.log("Um objeto viajando pelo ar a uma altidude de ", altitude,"ft a ", velocidade,"kt\n");
console.log("Estará em mach", mach.toFixed(3));
¹
