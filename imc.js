let peso = parseFloat(prompt("Qual é o seu peso ?"));
let altura = parseFloat(prompt("Qual a sua altura ?"));

let resultado = calcularImc( peso, altura);

alert(resultado);

function calcularImc(peso, altura){

    let imc = peso/(altura**2);

    let retorno = '';

    if(imc > 25){
        retorno = 'Acima do peso';
    }
    else if(imc >= 18 && imc <= 25){
        retorno = 'Peso ideal';
    }
    else{
        retorno = 'Abaixo do peso';
    }
    return retorno;
}
