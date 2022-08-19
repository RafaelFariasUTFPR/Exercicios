import jsonFile from '../pages.json' assert {type: 'json'};


export function setContent(volumeN, exercicioN){
    const markdownContainer = document.getElementById("markdown-container");

    jsonFile[volumeN].exercicios[exercicioN].Enunciado.forEach(element => {
        console.log(element)
        switch(element.isCode){
            case false:
    
            
    
            break;
            case true:
                
                fetch('./markdown/Volume1/Exercicio_1/Enunciado_2.md')
                    .then(response => response.text())
                    .then((response) => {
                        let tempCode = document.createElement('code');
                        let tempPre = document.createElement('pre');
                        tempPre.appendChild(tempCode);
                        tempCode.className = "language-css";
                        console.log(response)
                        let tempInnerHTML = Prism.highlight(response, Prism.languages.javascript, 'javascript');
                        tempCode.innerHTML = tempInnerHTML;
                        //tempCode.innerHTML = response;
                        markdownContainer.appendChild(tempPre);
                    })
                    .catch(err => console.log(err))
    
    
            break;
        }
    });
    


}
