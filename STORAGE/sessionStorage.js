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