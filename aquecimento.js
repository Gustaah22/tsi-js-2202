//Relembrando questões básicas do JS

//Loopings

//for 

for(let i = 1; i <= 10; i++ ){
    document.write("Linha " + i + "<br>");
    console.log("Linha " + i );
}

//while

let x = 1;
while(x <= 10){
    console.log("Linha " + x);
    x++;
}

//do...while

let y = 1;
do{   
    console.log("Linha "+ y);
    y++;
}while(y <= 10);

//Condicional 

//if else 

let a = 3;
let b = 4;
if(a > b){
    console.log("a é maior que b");
}else if (a == b){
    console.log("a é igual à b")
}else{
    console.log("b é maior que a");
}

//Switch


let dia = 5;
switch(dia){
    case 1:
        console.log("\n Hoje é segunda");
        break;
    
    case 2:
        console.log("\n Hoje é terça");
        break;
    
    case 3: 
        console.log("\n Hoje é quarta");
        break;
    
    case 4: 
        console.log("\n Hoje é quinta");
        break;
    
    case 5: 
        console.log("\n Hoje é sexta");
        break;
    
    case 6: 
        console.log("\n Hoje é sabado");
        break;
    
    case 7: 
        console.log("\n Hoje é domingo");
        break;
    
    default:
        console.log("\n Número inválido");
}

//Ternário (if para coisas simples)

let xx = 4; 
let yy = 2;

let resultado = x > y ? "x é maior" : "não é maior";

console.log(resultado); 

let gen = "m";
let gen2 = "h"; 

resultado = gen == "m" ? "genero masculino" : "Não existente"
console.log(resultado) 

//Coalescente
let coisa = null;
let variavel = coisa ?? "Não há";
console.log(variavel);


