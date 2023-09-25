// 1296, 4 ,4096, 6

// let a = 0;
// let b = 0;

// function resultado(a, b) {
//     expotenciacao = Math.pow(8, 4);
//     return expotenciacao;
// }
// resultado();
// console.log(resultado());


function GetIMC (peso = 0, altura = Number, imc) {
    this.peso = peso;
    this.altura = altura;
    this.imc = imc;
}

GetIMC.prototype.isValid = function() {
    let validPeso = this.peso;
    let validAltura = this.altura;
    let valid = true;

    
} 


GetIMC.prototype.CalcImc = function(alt, pes) {
    let result;
    this.alt = this.peso;
    this.pes = this.altura;

    
};



GetIMC.prototype.retornaTudo = function () {
    return console.log('Olá Mundo!')
}

const imc = new GetIMC(1, 2, "IMC");
console.log(imc);
imc.CalcImc();
imc.isValid();
imc.retornaTudo();

// console.log(imc.CalcImc());