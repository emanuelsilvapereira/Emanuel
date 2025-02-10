const prompt = require('prompt-sync')();

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

function exponenciação(a, b) {
    return a ** b;
}

function raiz(a){
    return Math.sqrt (a)
}

function seno(a){
    return Math.sin(a)
}

function cosseno(a){
    return Math.cos(a)
}

function tangente(a){
    return Math.tan(a)
}

while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. exponenciação, 6. raiz quadrada, 7. seno, 8. cosseno, 9. tangente, 10. sair: ");

    if (escolha === "10") {
        break;
    }

    if (escolha === "6"|| escolha === "7"|| escolha === "8"|| escolha === "9"){
        let num =  parseFloat(prompt("Digite o número: "));
        if (escolha === "6") {
            console.log("Resultado: ", raiz(num));
        }else if (escolha === "7") {
            console.log("Resultado: ", seno(num));
        }else if (escolha === "8") {
            console.log("Resultado: ", cosseno(num));
        }else if (escolha === "9") {
            console.log("Resultado: ", tangente(num));
        }
    }else{

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else if (escolha === "5") {
        console.log("Resultado: ", exponenciação(num1, num2));
    } else if (escolha === "6") {
        console.log("Resultado: ", raiz(num1));
    }
    else {
        console.log("Escolha inválida");
    }
    }
}
