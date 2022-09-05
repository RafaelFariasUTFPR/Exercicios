import jsonFile from '../pages.json' assert {type: 'json'};


function loadContent(response, parentDiv){
    const divResposta = document.getElementById("div-resposta");
    
    // setando a string que sera manipulada + adicionando o ² ao final para mostrar onde a página termina
    let responseString = response + '²';
    while(true){
        //Pegando o código entre ¹ e ¹
        let code = responseString.match(/ *\¹[^]*?\¹ */g)
        
        if(code != null){
            code = code[0]
        }
        
        responseString = responseString.replace(/ *\¹[^]*?\¹ */, "²")

        let text = responseString.substring(0, responseString.indexOf('²'));
        responseString = responseString.replace("²", "")

        let tempTextElement= document.createElement('div');
        tempTextElement.className = "markdown-text"

        if(parentDiv == divResposta){
            tempTextElement.className = "markdown-text answer"
            tempTextElement.style.display= "none"
        }

        tempTextElement.innerHTML = marked.parse(text);
        parentDiv.appendChild(tempTextElement);

        responseString = responseString.replace(text, "")
        //Removendo o ¹

        code = code.replace(/\¹|-/g, '')
        
        
        let tempCode = document.createElement('code');
        let tempPre = document.createElement('pre');

        

        tempPre.className = "language-css";
        tempPre.appendChild(tempCode);
        tempCode.className = "language-css";
        let tempInnerHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        tempCode.innerHTML = tempInnerHTML;
        parentDiv.appendChild(tempPre);



        if(text == null)
            break;

    }
}


// Async para usar o "wait" impedindo de renderizar o conteudo na ordem errada
export async function setContent(volumeN, exercicioN){
    const markdownContainer = document.getElementById("markdown-container");
    //markdownContainer.innerHTML = null;

    const divEnunciado = document.getElementById("div-enunciado");
    const divResposta = document.getElementById("div-resposta");
    divEnunciado.innerHTML = null;
    divResposta.innerHTML = null;
    // Carregando o enunciado
    await jsonFile[volumeN].exercicios[exercicioN].Enunciado.forEach(element => {
        fetch(jsonFile[volumeN].relativePath + element.path)
            .then(response => response.text())
            .then((response) => {
                loadContent(response,divEnunciado)
                
            })
            .catch(err => console.log(err))
    })

    
    let numeroDeRespostas = jsonFile[volumeN].exercicios[exercicioN].Resposta.length
    
    document.getElementById("toggle-answer").style.display = "none";

    if(numeroDeRespostas  > 0)
        document.getElementById("toggle-answer").style.display = "block";
    

    // Carregando as Respostas
    jsonFile[volumeN].exercicios[exercicioN].Resposta.forEach(element => {
            fetch(jsonFile[volumeN].relativePath + element.path)
                .then(response => response.text())
                .then((response) => {
                    loadContent(response, divResposta)
                })
                .catch(err => console.log(err))
            


    });
   
}

