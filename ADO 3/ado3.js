//let numero = prompt("Are you curious? I can entertain you with numbers, type one or no type for a random curiosity");

//A RESPOSTA DO CÓDIGO IRÁ APARECER DENTRO DE UM CONSOLE LOG.

//Iniciando uma nova HTTP request
const request = new XMLHttpRequest();

//Checa se o request está funcionando dentro da função
request.addEventListener('readystatechange', () => {
    let RequestCerto = request.status === 200 && request.readyState === 4;
    let RequestErrado = request.readyState === 4;
    if(RequestCerto){
        const data = request.responseText;
        return console.log(data);
    }
    if(RequestErrado){
        return console.log('Erro no request');
    }
});

//Requerimento para iniciar a API
request.open('GET', `http://numbersapi.com/random/math`);
request.send();

