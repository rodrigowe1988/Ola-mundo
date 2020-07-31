function imc(peso, altura){
    return peso / (altura * altura);      
}

console.log("O IMC é ", imc(74, 1.75).toFixed(2));

console.log(`ba${5 * "x"}a`.toUpperCase());

console.log("Hello World".split(' '));
console.log("Hello World".split(''));

var myString = "13/01/1988";
console.log(myString.match(/\d{2}\/\d{2}\/\d{4}/));