// function parOuImpar () {
//     var userNumber = parseInt(prompt("Digite um número"));

//     var restante = userNumber % 2

//     if (restante === 0 ) {
//         alert("Seu número é par");
//     } else {
//         alert("Seu número é impar");
//     }
// }


// parOuImpar ()
// parOuImpar ()
// parOuImpar ()





// function comparar(num1, num2) {
// if (num1 >= num2) {
//     return num1 - num2;
// } 
//  else {
//     return num2 - num1;
// } }

// var num1 = parseInt(prompt("Digite um número"))
// var num2 = parseInt(prompt("Digite um número"))

// var resultado = comparar (num1, num2)
// alert("Resultado = " + resultado)


// Exemplo: Calculadora
// function calculadora(primeiroNumero, segundoNumero, operacao) {
//  if (operacao == "+") {
//  return primeiroNumero + segundoNumero;
//  }
//  else if (operacao == "-") {
//  return primeiroNumero - segundoNumero;
//  }
//  else if (operacao == "*") {
//  return primeiroNumero * segundoNumero;
//  }
//  else if (operacao == "/") {
//  return primeiroNumero / segundoNumero;
//  }
//  else {
//  return 0;
//  }
// }
// console.log(calculadora(10, 5, "*"));

var somar = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero 
var subtrair = (primeiroNumero, segundoNumero) => primeiroNumero - segundoNumero 
var multiplicar = (primeiroNumero, segundoNumero) => primeiroNumero * segundoNumero
var dividir = (primeiroNumero, segundoNumero) => primeiroNumero / segundoNumero

function calculadora (primeiroNumero, segundoNumero, operacao) {
    if (operacao == "+") {
        return somar
    }
    else if (operacao == "-") {
        return subtrair
    }
    else if (operacao == "*") {
        return multiplicar
    } 
    else if (operacao == "/") {
        return dividir
    }
    else {
        return 0;
    }
}

var primeiroNumero = parseInt(prompt("Digite o primeiro número"))
var segundoNumero = parseInt(prompt("Digite o segundo número"))
var operacao = parseInt(prompt("Digite a operação"))


var resultado = somar

alert("Seu resultado é =" + resultado);
