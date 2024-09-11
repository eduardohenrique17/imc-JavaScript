const teclado = require('prompt-sync')({sigint:true});


const peso = parseFloat(teclado("digite seu peso"));

const altura = parseFloat(teclado("digite dua altura "));

 const imc = peso / (altura * 2) ;

console.log( imc );

if (imc< 18.5 ) {
    console.log ("abaixo do peso");
}
 
else if (imc >= 18.5 && imc <= 24.9){
    console.log ("peso normal");
}
else if (imc >= 30 && imc <= 35 ){
    console.log ("obesidade grau 1");
}
else if (imc >= 35 && imc <= 40 ){
    console.log ("obesidade grau 2");
}
else if (imc >= 40 ){
    console.log ("obesidade grau3");
}

else {

console.log ("a cima do peso ");
}

