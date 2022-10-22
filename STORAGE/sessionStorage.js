//Como trabalhar com session storage

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let valor = entrada.value;
    let mostrar = document.getElementById('mostrar').innerText;
    mostrar.innerText = valor;
    entrada.value = '';
    //Após obtermos o dado do usuário vamos guardá-lo no local storage
    sessionStorage.setItem('dadoDoUsuario', valor)
}

document.querySelector('#mostrar').innerText = sessionStorage.getItem('dadoDoUsuario');

//E para apagar no session storage?
//removeItem()
//sessionStorage.removeItem('dadoDoUsuario');

let vetor = ['pera', 'banana', 'manga'];

//Para guardar algo que não seja uma string no localStorage ou SessionStorage, temos que converter para string. Com o método JSON.stringify() transformamos vetores e objetos em string
sessionStorage.setItem('frutas', JSON.stringify(vetor));

//Para recuperar uma string JSON do localStorage ou sessionStorage e transformar em um objeto ou vetor novamente, use JSON.parse()
let recuperaDado = JSON.parse(sessionStorage.getItem('frutas'));

//Alterações no vetor recuperado do sessionStorage
recuperaDado[3] = 'abacaxi';
recuperaDado[1] = 'parchita'
// console.log(recuperaDado);

//Transforma o vetor em string para poder gravar em sessionStorage ou localStorage
let strRecupDados = JSON.stringify(recuperaDado);
console.log(strRecupDados);

sessionStorage.setItem('frutas', strRecupDados);

