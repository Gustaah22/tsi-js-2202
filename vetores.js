let amigos = ['Bono', 'Paulo', 'Marta', 'Yuri', 'Matheus'];

console.log(amigos.length);

//Looping com o vetor


for(let i = 0 ; i < amigos.length; i++){
    console.log(`O nome do amigo é: ${amigos[i]}`); //Template String
}

//Foreach for = para, each = cada
amigos.forEach(function(valor, indice){
    console.log(`${indice}: ${valor}`);
});

//Map
amigos.map(function(valor, indice){

    console.log(`${indice}: ${valor}`);
})

