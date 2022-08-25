import jsonFile from '../pages.json' assert {type: 'json'};


// Async para usar o "wait" impedindo de renderizar o conteudo na ordem errada
export async function setContent(volumeN, exercicioN){
    const markdownContainer = document.getElementById("markdown-container");
    markdownContainer.innerHTML = null;


    // Carregando o enunciado
    await jsonFile[volumeN].exercicios[exercicioN].Enunciado.forEach(element => {
        switch(element.isCode){
            case false:
                fetch(jsonFile[volumeN].relativePath + element.path)
                    .then(response => response.text())
                    .then((response) => {
                        let tempTextElement= document.createElement('div');
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
    })

    // Carregando as Respostas
    jsonFile[volumeN].exercicios[exercicioN].Resposta.forEach(element => {
        switch(element.isCode){
            case false:
                fetch(jsonFile[volumeN].relativePath + element.path)
                    .then(response => response.text())
                    .then((response) => {
                        let tempTextElement= document.createElement('div');
                        tempTextElement.className = "markdown-text answer"

                        // Inicia invisivel
                        tempTextElement.style.display= "none"


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
                        tempPre.className = "language-css answer";
                        
                        // Inicia invisivel
                        tempPre.style.display= "none"


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

