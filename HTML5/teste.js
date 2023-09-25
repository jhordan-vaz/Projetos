// 1296, 4 ,4096, 6

// let a = 0;
// let b = 0;

// function resultado(a, b) {
//     expotenciacao = Math.pow(8, 4);
//     return expotenciacao;
// }
// resultado();
// console.log(resultado());


function GetIMC (peso = Number, altura = Number, imc) {
    this.peso = peso;
    this.altura = altura;
    this.imc = imc;
}

GetIMC.prototype.isValid = function() {
    let valid = true;
    if(this.peso === "" || this.peso === String)  return console.log("Peso inválido!"); 
    if(this.peso === 0 || this.peso < 10)  return console.log("Peso inválido!"); 
} 


GetIMC.prototype.CalcImc = function() {
    let result;
    result = this.peso/ (this.altura * this.altura);
    return console.log(result.toFixed(2));
};



GetIMC.prototype.retornaTudo = function () {
    return console.log('Olá Mundo!')
}

const imc = new GetIMC(5, 1.80);
imc.CalcImc();
imc.isValid();

