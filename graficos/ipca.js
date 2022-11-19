const btn = document.querySelector('button').addEventListener('click', mostraIpca);

let ano = parseInt(prompt('Escreva um ano:'));

while(ano < 1992 || ano > 2022){
    alert('Escreva um ano válido entre 1992 e 2022');
    ano = parseInt(prompt('Escreva um ano:'));
}

let array = [1,2,4,'dada'];

let matriz = [[1,2,4,'dada'],[1,2,4,'dada'],[1,2,4,'dada'],[1,2,4,'dada']];
matriz[1][3]

function mostraIpca(evento){
    evento.preventDefault();
    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201111';
    
    fetch(url)
    .then(retorno => retorno.text())
    .then(stringJson => {
        let indices = JSON.parse(stringJson);
        let indice;
        let ipca = [];
        indices.forEach(mes => {
            let anoString = mes.data.substring(6,10);
            let mesString = mes.data.substring(3,5);
            let anoMesString = `${anoString}-${mesString}`;
            /*let dataAtual = mes.data;
            const [dia, mes, ano] = dataAtual.split('/');    
            let dataNova = new Date(+ano, mes-1, +dia);
            let dataFormatada = `${String(dataNova.getFullYear())}-${String((dataNova.getMonth() +1)).padStart(2, '0')}-${String((dataNova.getDate())).padStart(2, '0')}`
            console.log(dataFormatada)
            ipca.push({year: dataFormatada, value: mes.valor});*/
            
            if(parseInt(anoString) === ano){
                indice = parseFloat(mes.valor);

                ipca.push({month: anoMesString, value: indice});
                return;
            }
            
        });
        let i = 1;
        
        console.log(ipca)
        const jsonMorris = {
       
            element: 'ipca',
        
            resize: true,    
        
            //Dados do gráfico
            data: ipca,
            
            lineColors: ['CornflowerBlue'],
            // Nome do eixo com os valores de X
            xkey: 'month',

            xLabels:'month',
            
            // Uma lista de nome dos atributos contidos no eixo Y
            ykeys: ['value'],
            //Rótulos para os indices que aparecem quando passa o mouse por cima
            labels: ['IPCA']
        }
        // console.log(indices)
        new Morris.Line(jsonMorris)
    }).catch(() => {
        alert('API do Banco Central fora do ar');
    })
    
}