## Resposta

¹let s0 = Number(prompt("Posição inicial em [m]"));
let v0 = Number(prompt("Velocidade inicial em [m/s]"));
let t = Number(prompt("Tempo em [s]"));
let a = Number(prompt("Aceleração em [m/s^2]"));
 
let s = s0 + (v0 * t) + ((a * Math.pow(t,2))/2);
 
console.log(`O automóvel estará na posição ${s}m`);
¹
