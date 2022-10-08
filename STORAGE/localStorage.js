//Como trabalhar com local storage

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
    localStorage.setItem('dadoDoUsuario', valor)
}

document.querySelector('#mostrar').innerText = localStorage.getItem('dadoDoUsuario');

//E para apagar no local storage?
//removeItem()
//localStorage.removeItem('dadoDoUsuario');