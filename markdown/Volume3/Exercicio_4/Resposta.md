## Resposta

¹let nRed = parseFloat(prompt("Nota em redação"));
let nNat = parseFloat(prompt("Nota em Ciências da Natureza e suas Tecnologias"));
let nHum = parseFloat(prompt("Nota em Ciências Humanas e suas Tecnologias"));
let nLin = parseFloat(prompt("Nota em Linguagens, Códigos e suas Tecnologias"));
let nMat = parseFloat(prompt("Nota em Matemática e suas Tecnologias"));
 
let curso = parseInt(prompt("Escolha um dos cursos abaixo\n(1) - Eng. Eletrônica\n(2) - Medicina\n(3) - Licenciatura em matemática"));
 
let notaFinal = 0;
 
switch(curso)
{
    case 1: // Eng. Eletronica
        nRed *= 2;
        nNat *= 2;
        nHum *= 1;
        nLin *= 1;
        nMat *= 4;
        notaFinal = (nRed + nNat + nHum + nLin + nMat) / 10;
        break;
   
    case 2: // Medicina
        nRed *= 2;
        nNat *= 3;
        nHum *= 2;
        nLin *= 2;
        nMat *= 1;
        notaFinal = (nRed + nNat + nHum + nLin + nMat) / 10;
        break;
 
    case 3: // Licenciatura em matemática
        nRed *= 2;
        nNat *= 1;
        nHum *= 1;
        nLin *= 2;
        nMat *= 4;
        notaFinal = (nRed + nNat + nHum + nLin + nMat) / 10;
        break;
 
    default:
        alert("CURSO INVÁLIDO");
}
 
 
switch(curso)
{
    case 1: // Eng. Eletronica
        if(notaFinal > 690)
            document.write("Aprovado");
        else
            document.write("Reprovado");
        break;
   
    case 2: // Medicina
    if(notaFinal > 875)
            document.write("Aprovado");
        else
            document.write("Reprovado");
        break;
 
    case 3: // Licenciatura em matemática
    if(notaFinal > 430)
            document.write("Aprovado");
        else
            document.write("Reprovado");
        break;
 
    default:
        document.write("Inválido");
}
 
document.write(`Sua nota com pesos foi de: ${notaFinal}`);¹
