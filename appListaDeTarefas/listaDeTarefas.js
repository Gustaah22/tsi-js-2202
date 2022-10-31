const entradaTarefa = document.getElementById('tarefa');
const btnAdd = document.querySelector('.btn');
const lista = document.querySelector('.collection');
const filtro = document.getElementById('filtro');
const btnLimpar = document.querySelector('.limpar-tarefas');


function carregaMonitoresDeEventos(){
    document.addEventListener('DOMContentLoaded', recuperaTarefas);
    //Adiciona tarefa
    btnAdd.addEventListener('click', addTarefa);
    //Evento para fazer o x funcionar (apagar uma unica tarefa)
    lista.addEventListener('click', apagaTarefa);
    btnLimpar.addEventListener('click', limpaTarefas);
    filtro.addEventListener('keyup', filtraTarefa);
    
}
carregaMonitoresDeEventos();
function recuperaTarefas(){
    let tarefas = localStorage.getItem('tarefas');
    if(tarefas === null){
        tarefas = [];
    }
    else{
        tarefas = JSON.parse(tarefas);
    
    }
    
    tarefas.forEach(tarefa => {
        criaLi(tarefa);
    });

    

}
function apagaTarefa(evento){
    /*se o elemento pai tiver a classe apaga-tarefa,
      ou seja, for o elemento "a", apaga  li, ou seja,
      a tarefa
    */
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();

        apagarDoLocalStorage(evento.target.parentElement.parentElement)
    }
}
function apagarDoLocalStorage(tarefa){
   let tarefaParaApagar = tarefa.innerText;

   let tarefas = [];

   // Checar a existencia do localStorage e recuperar ele
   if(localStorage.getItem('tarefas') !== null){

    //transformar em um objeto JSON em uma string
    tarefas = JSON.parse(localStorage.getItem('tarefas'));

   }

    // Fazer um looping para buscar a tarefa
   tarefas.forEach(function(tarefa, indice){

    // Se encontrar o que queremos apagamos
    if(tarefaParaApagar == tarefa){
        
        // Apagamos a tarefa igual a tarefa clicada pelo usuário
        tarefas.splice(indice, 1);
    }
   });

    //gravar o objeto JSON no localStorage de novo
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
//Adiciona tarefa
function addTarefa(evento){
    evento.preventDefault();
    
    //Valida a entrada de dados
    if(entradaTarefa.value === ''){
        return alert('Escreva uma tarefa');
    }
    //Grava a tarefa no localStorage
    gravaTarefa(entradaTarefa.value);

    criaLi(entradaTarefa.value);

     
    entradaTarefa.value = '';

    
}



// Apaga todas as tarefas 
function limpaTarefas(evento){
    evento.preventDefault();

    lista.innerHTML = '';
    localStorage.removeItem('tarefas');
    //Solução 1
    // let arrayLista = Array.from(lista.children);
    // arrayLista.forEach(function(elemento){
    //     elemento.remove();
    // });
}

// Filtra as tarefas
function filtraTarefa(evento){
    const procurado = evento.target.value.toLowerCase();
    const tarefas = Array.from(document.querySelectorAll('.collection-item'));

    //indexOf retorna -1 caso não encontre o valor, se o valor for encontrado ele indica a posição do valor na string
    tarefas.forEach(function(tarefa){

        let tarefaLowerCase = tarefa.textContent.toLowerCase();

        if(tarefaLowerCase.includes(procurado)){
            tarefa.style.display = 'block';
        }
        else{
            tarefa.style.display = 'none';
        }
    })
}



function gravaTarefa(tarefa){
    let tarefas = [];

    //Recupera tarefas gravadas no localStorage 
    let tarefaDoStorage = localStorage.getItem('tarefas');

    
    if(tarefaDoStorage != null){
        // Se localStorage for diferente de null 
        //converte de string JSON para um objeto JSON
        tarefas = JSON.parse(tarefaDoStorage);
    }
    tarefas.push(tarefa);

    // Grava o novo JSON no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criaLi(tarefa){
    // Criando uma nova li
    const li = document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(tarefa));

    //Cria o a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //Criando icone do X usando fonte awesome
    const i = document.createElement('i');
    i.className = 'fa fa-remove';
    
    // Monta o li e coloca no ul 
    a.appendChild(i);
    li.appendChild(a);
    lista.appendChild(li);
}