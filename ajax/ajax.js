const btn = document.querySelector('button')

btn.addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5501/ajax/conteudo.txt', true); //true = assincron, sincrono está sendo descontinuado

    request.onload = function(){
        if(this.status === 200){
            document.getElementById('dadoRecuperado').innerHTML = this.responseText;
        }
    }

    request.send();
}