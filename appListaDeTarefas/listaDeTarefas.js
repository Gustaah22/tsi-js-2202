const tarefa = document.querySelector('#tarefa');
const listaDeTarefas = document.querySelector('.collection');
const btnAddTarefa = document.querySelector('.btn');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){
    
    //evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);

    //evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
}
carregaMonitoresDeEventos();

function apagarTarefa(evento){

    //se o elemento pai tiver a classe apaga-tarefa, ou seja, for o elemento "a", apague li, ou seja, a tarefa
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){

        //apaga o elemento pai do "a", ou seja, o li
        evento.target.parentElement.parentElement.remove();
    }
    
}

function adicioneTarefa(evento){
    evento.preventDefault();

    //verifica se usuário entrou com uma tarefa
    if( tarefa.value === '' ){
        alert('Entre com uma tarefa');
        return
    }
    //cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(tarefa.value));

    //cria a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content'

    //cria icone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //apaga o input para entrada
    //tarefa.value = '';
}



