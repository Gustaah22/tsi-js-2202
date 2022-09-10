let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener ('click', function(evento){
    evento.preventDefault();
    console.log(evento)
})

/*
btnCalcular.addEventListener ('click', executa(evento));

function executa(evento){
    console.log(evento);
}

console.log(btnCalcular);
*/