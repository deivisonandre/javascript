let btn = document.querySelector('button');

btn.onclick = function(){
    // Declara a variável de texto que será adicionado ao parágrafo
    let textElement = '';
    
    // Recupera o valor do input
    let inputValue = document.querySelector('input').value;

    // Cria um elemento parágrafo <p></p>
    let pElement = document.createElement('p');

    // Adiciona o atributo class ao parágrafo
    pElement.setAttribute('class', 'classe-p');

    // Verifica se o usuário preencheu o input, caso contrário coloca um texto padrão
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio....');
    }

    // Adiciona o texto como filho do parágrafo
    pElement.appendChild(textElement);

    // Recupera a div
    let divElement = document.querySelector('#app');

    // Adicona o parágrafo como filho da div
    divElement.appendChild(pElement);

    // Limpa o input
    document.querySelector('input').value = '';
}