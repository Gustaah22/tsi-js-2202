let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener ('click', function(evento){
    evento.preventDefault();

    let serv = document.getElementById('serviço');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    //recuperar o dados da matriz
    let preco = calculaPreco(serv.value, prazo.value);

    //Mostra o resultado no elemento p
    res.innerText = `O preço é ${preco}`;

    //Ver dados do evento (click) no console
    console.log(serv.value);

    //ver dados do evenro (click) no console
    console.log(evento);
    

    //Obter os valores de seviço e prazo
});

function calculaPreco(serviço, prazo){
    let tabela = [['$400', '$250', '$100'],['$500', '$400', '$250' ],['Não Fazemos', 'Não Fazemos', '$400']];

    return tabela[serviço][prazo];
}


/*
btnCalcular.addEventListener ('click', executa(evento));

function executa(evento){
    console.log(evento);
}

console.log(btnCalcular);
*/