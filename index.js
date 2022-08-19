import jsonFile from './pages.json' assert {type: 'json'};

const projectName = document.getElementById("options-menu");

function generateButtons(){
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
            tempButtonElement.id = volumeId + "exercicio" + j;
            tempButtonElement.innerHTML = "• " + jsonFile[i].exercicios[j].nome;
            tempQuestionGroupElement.appendChild(tempButtonElement);
        }

        
        projectName.appendChild(tempListElement)
    }
}
generateButtons()
let markdownString;

fetch('./markdown/Volume1/Exercicio_2/Enunciado_1.md')
   .then(response => response.text())
   .then((response) => {
       getText(response)
   })
   .catch(err => console.log(err))

function getText(response){
    markdownString = response;
    let mySubString = markdownString.slice(
        markdownString.indexOf("~~~js") + 7, 
        markdownString.lastIndexOf("~~~")
    
    );
    markdownString.replace('a', '');
        
    document.getElementById('markdown-text').innerHTML = marked.parse(markdownString);
    console.log(mySubString)

}

