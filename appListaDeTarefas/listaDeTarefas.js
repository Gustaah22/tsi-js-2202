//Pegando os elementos
const tarefa = document.querySelector("#tarefa");
const adicionar = document.querySelector(".adicionar");
const lista = document.querySelector(".collection");
const filtro = document.querySelector("#filtro");
const limpar = document.querySelector(".limpar-tarefas");

function carregaMonitoresDeEventos(){

    //Quando a página for carregada, chama recuperaTarefas
    document.addEventListener('DOMContentLoaded', recuperaTarefas);
    //Adicionando tarefa
    adicionar.addEventListener('click', adicionarTarefa);

    //Evento para fazer o x funcionar(no ul pois ele se propaga)
    lista.addEventListener('click', apagarTarefa);
    
    //Limpando todas as tarefas
    limpar.addEventListener('click', apagarTudo);
    //Filtra quando a pessoa solta a tecla
    filtro.addEventListener('keyup', filtrar);
}
carregaMonitoresDeEventos();

function AddTarefa(tarefa){
    //Criando uma nova li
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(tarefa));

    //Criando o x para excluir tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //Criando o icone
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //Montando os elementos
    a.appendChild(i);
    li.appendChild(a);
    lista.appendChild(li);

}
function recuperaTarefas(evento){
    
    //Recupera dados do loclStorage
    let tarefas = localStorage.getItem('tarefas');
    //Verifica se há dados recuperados e caso não exista transforma em vetor
    if(tarefas == null){
        tarefas = [];
    }
    
    tarefas = JSON.parse(tarefas);
    console.log(tarefas);

    tarefas.forEach( function (tarefa)
     {
        AddTarefa(tarefa)
    })
}

//Filtro
function filtrar(event){

    const tarefas = Array.from(document.querySelectorAll(".collection-item"));
    const procurando = event.target.value.toLowerCase();
    
    //Checando cada item da lista
    tarefas.forEach(tarefa => {        

        let itens = tarefa.textContent.toLowerCase();

        //indexOf(traz o número da posição e se não encontrar ela retorna -1, php traz false)
        if(itens.includes(procurando))
        {
            tarefa.style.display = "block";
        }
        else
        {
            tarefa.style.display = "none";
        }
    });
}


//Adicionando tarefa
function adicionarTarefa(evento){
    evento.preventDefault();

    //Validando entrada
    if(tarefa.value === "")
    {
        return alert('Escreva uma tarefa!');
    }

    gravarTarefa(tarefa.value);

    
    //Apaga o input da entrada
    tarefa.value = '';

}

function apagarTarefa(evento){
    evento.preventDefault();

    //Verifica se o target é filho do elemento que possui "apaga tarefa"
    if(evento.target.parentElement.classList.contains('apaga-tarefa')) //classList = o nome inteiro da classe
    {
        //Apaga a tarefa (o pai do pai, li > a > i)
        apagarDoLocalStorage(evento.target.parentElement.parentElement.remove)();
    }
}

function apagarTudo(event){
    event.preventDefault();

    lista.innerHTML = '';
}

function apagarDoLocalStorage(tarefas){

}

function gravarTarefa(tarefa){
    
    let tarefas = [];
    //Recupera tarefas já gravadas no localStorage
    let tarefasDoStorage = localStorage.getItem('tarefas');

    if(tarefasDoStorage != null)
    {   
        //Se LocalStorage já tiver alguma informação faz o parse de string JSON para um objeto JSON
        tarefas = JSON.parse(tarefasDoStorage);
    }
    //Adiciona a tarefa ao JSON já existente
    tarefas.push(tarefa);
    //Grava o novo JSON no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));    
}


