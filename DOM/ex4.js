let e;

// Com getElementbyClassName
e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){
    val.style.color = '#ba34ef';

    //val.innerText = 'Outra tarefa';

    console.log(val.innerText);
});

// Array.from(e).forEach(element => {
//     console.log(element.innerText);
    
// });

//Com querrySelectorAll
e = document.querySelectorAll('li');

console.log(e[2]);

e.forEach(function(val){
    console.log(val.innerText);
});


//Somente impares(para pares, even)
e = document.querySelectorAll('li:nth-child(even)');

e.forEach(function(val){
    val.style.background = '#dedede';
});

//Sem usar função anônima
e.forEach(fazalgumacoisa);
function fazalgumacoisa(val){
    console.log(val);
}

e = document.querySelector('ul.collection');


//console.log(e.firstchild);
//console.log(e.childElementCount);
console.log(e.children[3].children[0]);