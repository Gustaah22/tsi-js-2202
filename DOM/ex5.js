//Como criar elementos

//Cria o elemento li 
let novoItemNaLista = document.createElement('li');

//Define o id do novo elemento
novoItemNaLista.id = 'novo-item';

//Define a classe CSS do novo elemento
novoItemNaLista.className = 'collection-item';

//Adiciona um atributo
novoItemNaLista.setAttribute('title', 'Novo Item na Lista');

// Adiciona um node filho
novoItemNaLista.appendChild(document.createTextNode('Fazer exercicio fisico'));

//Criar sub elementos <a>
let elementoAncora = document.createElement('a');

elementoAncora.className = 'delete-item secondary-content';

elementoAncora.setAttribute('href', '#');

//Criar sub elementos <i>
let elementoIcone = document.createElement('i');

elementoIcone.className = 'fa fa-remove';

//adicona o <i> em <a>
elementoAncora.appendChild(elementoIcone);

//Adiciona o <a> em <li>
novoItemNaLista.appendChild(elementoAncora);

//Capturando o <ul> com querrySelector
//Adiciona o <li> em <ul>
// let elementoLista = document.querySelector('ul.collection');

//Como capturar o <ul> pela classe
let elementoLista = document.getElementsByClassName('collection');
elementoLista[0].appendChild(novoItemNaLista);



