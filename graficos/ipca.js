document.querySelector('button').addEventListener('click', recuperaDados);


let jsonParaMorris

const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101'

function recuperaDados(evento){
    evento.preventDefault();

    fetch(url).then(function(retorno){

        return retorno.text();

    }).then(function(stringJson){
        
        jsonParaMorris = {
                            // ID do elemento onde o gráfico vai aparecer
                            element: 'ipca',                        
                        
                            data: [
                                { year: '2008', value: 20 },
                                { year: '2009', value: 10 },
                                { year: '2010', value: 5 },
                                { year: '2011', value: 5 },
                                { year: '2012', value: 20 },
                                { year: '2013', value: 25 },
                                { year: '2014', value: 30 },
                                { year: '2015', value: 20 },
                            ],                        

                            // Nome do eixo com os  valores de X.
                            xkey: 'year',
                            // Uma lista de nome dos atributos de dados contidos no Y
                            ykeys: ['value'],
                            
                            // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['Value'],
                        }

                        newMorris.Area(jsonParaMorris);
        
    }).catch(function(){
        alert('API do banco central está fora do ar');
    });
}