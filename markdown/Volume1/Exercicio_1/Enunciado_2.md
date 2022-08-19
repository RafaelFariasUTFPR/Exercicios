import jsonFile from '../pages.json' assert {type: 'json'};


export function setContent(volumeN, exercicioN){
    const markdownContainer = document.getElementById("markdown-container");

    jsonFile[volumeN].exercicios[exercicioN].Enunciado.forEach(element => {
        switch(element.isCode){
            case false:
                fetch(jsonFile[volumeN].relativePath + element.path)
                    .then(response => response.text())
                    .then((response) => {
                        let tempTextElement= document.createElement('code');
                        tempTextElement.className = "markdown-text"
                        tempTextElement.innerHTML = marked.parse(response);
                        markdownContainer.appendChild(tempTextElement);
                    })
                    .catch(err => console.log(err))
            
    
            break;
            case true:
                
                fetch(jsonFile[volumeN].relativePath + element.path)
                    .then(response => response.text())
                    .then((response) => {
                        let tempCode = document.createElement('code');
                        let tempPre = document.createElement('pre');
                        tempPre.className = "language-css";
                        tempPre.appendChild(tempCode);
                        tempCode.className = "language-css";
                        let tempInnerHTML = Prism.highlight(response, Prism.languages.javascript, 'javascript');
                        tempCode.innerHTML = tempInnerHTML;
                        markdownContainer.appendChild(tempPre);
                    })
                    .catch(err => console.log(err))
    
    
            break;
        }
    });
    


}
