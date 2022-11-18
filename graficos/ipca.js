document.querySelector('button').addEventListener('click', recuperaDados);


let jsonParaMorris;

const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101'

function recuperaDados(evento){
    evento.preventDefault();

    fetch(url).then(function(retorno){

        return retorno.text();

    }).then(function(stringJson){

        const indices = JSON.parse(stringJson);

        let indice;
        let ipca = [];

        indices.forEach(function(mes){
            anoString = mes.data.substring(6, 10);
            mesString = mes.data.substring(3, 5);
            anoMesString = anoString + '-' + mesString;

            /*
            if(parseInt(mesString) != 2000{
                return;
            })
            */


            indice = parseFloat(mes.valor);

            ipca.push({month: anoMesString, value: indice});
            
        });
        
        jsonParaMorris = {
                            // ID do elemento onde o gráfico vai aparecer
                            element: 'ipca',                         
                            //dados do grafico 
                            data: ipca,
                                           
                            // Nome do eixo com os  valores de X.
                            xkey: 'month',
                            // Uma lista de nome dos atributos de dados contidos no Y
                            ykeys: ['value'],
                            
                            // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['IPCA'],
                        }

                        new Morris.Line(jsonParaMorris);

        
    }).catch(function(){
        alert('API do banco central está fora do ar');
    });
}