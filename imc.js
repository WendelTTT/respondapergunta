let nome = prompt('Digite aqui seu nome');



let idade = prompt(`${nome} digite aqui sua idade`);
let peso = prompt(`${nome} digite aqui seu peso`);
let altura = prompt(`${nome} digite aqui sua altura`);

let confirma = confirm(`${nome} deseja saber seu imc?`);

let imc = peso / (altura*altura);
let imcArr = Math.round( imc);
//let confirma = confirm(`${nome} deseja saber seu índice de massa corporal`);

document.body.innerHTML +=`Caro ${nome}<br />`;
document.body.innerHTML +=`A sua idade é: ${idade}<br />`;
document.body.innerHTML +=`O seu peso é: ${peso}<br />`;

document.body.innerHTML +=`O seu IMC é: ${imcArr}<br />`;



