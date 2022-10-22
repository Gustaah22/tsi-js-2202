/*
Criar uma calculadora de valor a ser 
cobrado do cliente
O valor do serviço pode variar conforme o
prazo.
Os valores e prazos devem ser armazenados
em uma matriz. 
O cálculo deve ficar obrigatoriamente em 
uma função.    
*/

let tabela = [['$$$', '$$', '$'],['$$$$', '$$$', '$$' ],['--', '--', '$$$']];

let serviço = prompt("Entre com o serviço: \n0 - Troca de óleo \n1 - Balanceamento \n2 - Cambagem");
let prazo = prompt("Entre com o prazo: \n0 - Um dia \n1 - Dois dias \n2 - Três Dias");

if( validaEntrada(serviço) && validaEntrada(prazo)){
    alert("O serviço ficará em: " + tabela[serviço][prazo]);
}
else{
    alert("ERRO: Verifique os valores inseridos e tente novamente");
}

function validaEntrada(dadousuario){
    return dadousuario >= 0 && dadousuario <= 2 ? true : false;
}
