// const prompt = require('prompt-sync')();

const promptSync = require('prompt-sync');
const prompt = promptSync();

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }
}
function raizquadrada(a) {
    return sqrt(a);

}
function potenciação(a, b) {
    return a**b
    ;

}

function Seno(a)  {

    return Math.sin(a)
    
}

function cosseno(a)  {
    return Math.cos(a)
    
}

function tangente(a)  {
    return Math.tan(a)
   
}

while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. potenciação, 6. raiz quadrada, 7. seno, 8. cosseno, 9. tangente, 10. sair");

    if (escolha === "10") {
        break;
    }

    if (escolha === "1") {
        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log("Resultado: ", soma(num1, num2));
    } 
    else if (escolha === "2") {
        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log("Resultado: ", subtracao(num1, num2));
    } 
    
    else if (escolha === "3") {
        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log("Resultado: ", multiplicacao(num1, num2));
    } 
    
    else if (escolha === "4") {
        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log("Resultado: ", divisao(num1, num2));
    } 
    
    else if (escolha === "5") {
        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log("Resultado: ", potenciação(num1));
    } 
    
    else if (escolha === "6") {
        let num1 = parseFloat(prompt("Digite o número: "))
        console.log("Resultado: ", raizquadrada(num1));
    } 
    
    else if (escolha === "7") {
        let num1 = parseFloat(prompt("Digite o valor do cateto oposto: "));
        let num2 = parseFloat(prompt("Digite o valor da hipotenusa: "));
        console.log("Resultado: ", Seno(num1, num2));
    }

    else if (escolha === "8") {
        let num1 = parseFloat(prompt("Digite o valor do cateto adjacente: "));
        let num2 = parseFloat(prompt("Digite o valor da hipotenusa: "));
        console.log("Resultado: ", cosseno(num1, num2));
    }

    else if (escolha === "9") {
        let num1 = parseFloat(prompt("Digite o valor do cateto oposto: "));
        let num2 = parseFloat(prompt("Digite o valor do cateto adjacente: "));
        console.log("Resultado: ", tangente(num1, num2));
    } 
    
    else {
        console.log("Escolha inválida");
    }
}
