//console.log(window);

//Como utilizar aributos de um objeto
//alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidth}`);

let meuTitulo = document.getElementById('Titulo');

if(confirm('Deixe uma mensagem!')){
    let msg = prompt('Mensagem');
    meuTitulo.innerText = msg + ' ('+ window.navigator.vendor + ')' ;
    meuTitulo.style.backgroundColor = 'green';
}
else{
    meuTitulo.innerText = 'Sem Mensagem';
    meuTitulo.style.backgroundColor = '#dedede';
}

//para ver tudo disponivel no navegador
console.log(window.navigator.vendor);
