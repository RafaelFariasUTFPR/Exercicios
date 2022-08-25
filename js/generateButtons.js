/* 

Esse arquivo é o responsavel pela criação e lógica dos botões
de seleção.

Consiste basicamente de uma classe "exercicioButton" que gera
e monitora os botões laterais

*/

import jsonFile from '../pages.json' assert {type: 'json'};
import { setContent } from './setContent.js';


export class exercicioButton{
    constructor(){

        const projectName = document.getElementById("options-menu");
        for(let i = 0; i < jsonFile.length; i++)
        {
            let volumeId = 'volume' + (i + 1);
            let tempListElement = document.createElement('li');
            tempListElement.className = "options-list";
    
            let tempQuestionGroupElement = document.createElement('div')
            tempQuestionGroupElement.className = "question-group"
            tempQuestionGroupElement.id = volumeId;
            tempListElement.appendChild(tempQuestionGroupElement);
    
            let tempGroupNameElement = document.createElement('p');
            tempGroupNameElement.className = "group-name";
            tempGroupNameElement.innerHTML = (i+1) + ". " +jsonFile[i].nome;
            
            tempQuestionGroupElement.appendChild(tempGroupNameElement);
    
            for(let j = 0; j < jsonFile[i].exercicios.length; j++)
            {
                let tempButtonElement = document.createElement('button');
                tempButtonElement.className = "question-selector-button";
                tempButtonElement.id = volumeId + "exercicio" + (j + 1);
                tempButtonElement.innerHTML = "• " + jsonFile[i].exercicios[j].nome;
                tempQuestionGroupElement.appendChild(tempButtonElement);
                let buttonObj = {
                    htmlButton: tempButtonElement,
                    volume: i,
                    exercicio: j
                };

                this.buttonArr.push(buttonObj);
            }
    
            
            projectName.appendChild(tempListElement);
        }
    }

    loop(){
        this.buttonArr.forEach(element => {
            element.htmlButton.onclick = () =>{
                setContent(element.volume, element.exercicio)         
            }            
        });
    }


    buttonArr = [];
}

