## Resposta

¹let velocidade = Number(prompt("Insira a velocidade do objeto em [m/s]"));
let temperatura = Number(prompt("Insira a temperatura do ar em [C°]"));
 
let velDoSom = 331 + (0.6 * temperatura);
let mach = velocidade / velDoSom;
 
console.log("Um objeto viajando pelo ar a uma temperatura de ", temperatura,"C° a ", velocidade,"m/s\n");
console.log("Estará em mach", mach.toFixed(1));
¹

