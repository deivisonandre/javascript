// 1) Temos referanciar o input 
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista 
let lista = document.querySelector('#lista');


let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver um filme',
    'Ler um livro'
];

/*
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Estudar Python</li>
<li class="list-group-item list-group-item-action">Estudar JavaScript</li>
<li class="list-group-item list-group-item-action">Ver um filme</li>
<li class="list-group-item list-group-item-action">Ler um livro</li>
*/