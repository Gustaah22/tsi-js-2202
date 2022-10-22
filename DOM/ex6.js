//Como atualizar um elemento com 35

//Criamos um novo elemento 
const novoTitulo = document.createElement('h2');
//Colocas as características que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento H5 atual (que está originalmente no HTML)
const tituloAtual = document.getElementById('task-title');

//Capturamos o elemento mãe/pai do elemento que queremos atualizar
let divMaeDoTitulo = document.getElementsByClassName('card-action');

//atualizamos o elemento
divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);


// tituloAtual.replaceWith('AAAAAAAAA');
//utilizar o exemplo acima com querrySelector ao inves de getElementByClassName