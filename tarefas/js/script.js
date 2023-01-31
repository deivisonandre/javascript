// 1) Temos referanciar o input 
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista 
let lista = document.querySelector('#lista');

// card
let card = document.querySelector('.card');


let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver um filme',
    'Ler um livro'
];

function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        //Adiciona classes no item da lista
        itemLista.setAttribute('Class','list-group-item list-group-item-action');

        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos "escutar" o evento de clique no botão
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input 
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        // Executando a função para renderizar as tarefas 
        renderizarTarefas();

        // Limpar o input
        input.value = '';

        // Limpar mensagens de erro (spans)
        removerSpans();
    }else{
        // Limpar mensagens de erro (spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'Alert alert-warning');

        let msg = document.createTextNode('Você precisa informa a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }
}


function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}
