/* 

Esse é o arquivo principal do WebApp, ele junta os outros 
arquivos de javaScript formando a lógica da Web Aplicação.

Todo o conteudo é gerado em runtime pelo próprio cliente,
não existe comunicação com um servidor com o conteudo
pré carregado.

Os conteudos são gerenciados pelo "pages.json" e carregados
de forma dinâmica na medida que são requeridos

*/

// Importando o json que indexa o conteúdo
import jsonFile from './pages.json' assert {type: 'json'};

// Importando a classe que cria e mantem os botões laterais
import { exercicioButton } from './js/generateButtons.js';

// Importando a função responsavel por mostrar o conteúdo
import { setContent } from './js/setContent.js';




// Criando o objeto botoes, no construtor da classe os botões são gerados
let buttonObj = new exercicioButton; 

// Setando o conteúdo inicial como 0, 0
setContent(0, 0)

// Função responsável por atualizar os botões
buttonObj.loop();


// Mostrando ou escondendo a resposta
document.getElementById("toggle-answer").onclick = () =>{
    let answerContainers = document.getElementsByClassName('answer')
    for(let i = 0; i < answerContainers.length; i++){
        if(answerContainers.item(i).style.display == "block"){
            answerContainers.item(i).style.display = "none";
            continue;
        }
        answerContainers.item(i).style.display = "block";

    }

}