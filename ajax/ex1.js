const btn = document.querySelector('button')

btn.addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    request.onload = function(){ 
        if(this.status === 200){
            // document.getElementById('dadoRecuperado').innerHTML = this.responseText;
            //Recupera a string JSON e transforma em objeto JSON
            // let dadoJson = JSON.parse(this.responseText);
            // //Looping para ler o vetor
            // dadoJson.forEach(usuario => {
            //     //Checa se o usuário é maior de idade ou não dependendo do valor inserido no objeto
            //     if(usuario['idade'] >= 18){
            //         document.getElementById('dadoRecuperado').innerHTML += `${usuario['nome']} é maior de idade e sua idade é ${usuario['idade']}<br>`
            //     }
            //     else{
            //         document.getElementById('dadoRecuperado').innerHTML += `${usuario['nome']} é menor de idade e sua idade é ${usuario['idade']}<br>`
            //     }
            // });
            
                let dados = JSON.parse(this.responseText);
                let saida = '';
                dados.forEach(function(aluno){
                    saida += aluno.idade >= 18 ?
                    `${aluno.nome} é maior de idade e sua idade é ${usuario['idade']}<br>`
                    :
                    `${aluno.nome} é maior de idade e sua idade é ${usuario['idade']}<br>`;
                })
            
        }
    }

    request.send();
}