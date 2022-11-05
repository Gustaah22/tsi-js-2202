document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();
    //nome do usuario 
    let nome = document.getElementById('nome').value;
    //Fazemos a chamada
    fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){

        console.log(ret);
        //depois pegamos apenas o conteúdo do retorno
        return ret.text();
        //então
    }).then(function(cont){
        //trabalhamos com o conteúdo retornado
        let dados = JSON.parse(cont);
        console.log(dados);
        let saida = `${dados.name} tem ${dados.age} anos`;

        document.getElementById('nome').value = '';
                
        document.querySelector('#dadoRecuperado').innerHTML = saida;       
    });
}