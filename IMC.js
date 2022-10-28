let altura = parseFloat(prompt("Digite sua altura"));
let peso = parseFloat(prompt("Digite seu peso"));

let IMC = peso/ (altura*altura);

document.write("Seu IMC é " + IMC)