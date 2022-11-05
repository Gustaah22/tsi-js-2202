document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();
    //Fazemos a chamada
    fetch('http://127.0.0.1:5500/ajax/conteudo.txt').then(function(ret){

        console.log(ret);
        //depois pegamos apenas o conteúdo do retorno
        return ret.text();
        //então
    }).then(function(cont){
        //trabalhamos com o conteúdo retornado
        let saida = '';
        let dados = JSON.parse(cont);
        dados.forEach(function(aluno){
            saida += aluno.idade >= 18 ?
            `${aluno.nome} é maior de idade e sua idade é ${aluno.idade}<br>`
            :
            `${aluno.nome} é maior de idade e sua idade é ${aluno.idade}<br>`;
        });
        document.querySelector('#dadoRecuperado').innerHTML = saida;
        console.log(cont);
        
    });
}