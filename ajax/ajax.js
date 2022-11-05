const btn = document.querySelector('button')

btn.addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    request.onload = function(){
        if(this.status === 200){
            document.getElementById('dadoRecuperado').innerHTML = this.responseText;
        }
    }

    request.send();
}