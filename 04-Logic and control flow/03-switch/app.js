// Switch é um methodo condicional que seve para avaliar casos e retorna o valor caso a instrução for verdadeira

const time = new Date();
const mes = time.getMonth();
const hora = time.getHours()

switch(mes) {
    case 1: console.log('Janeiro');
    break;
    case 2: console.log('Fevereiro');
    break;
    default: console.log('Mes indefinido');
};

switch (true) {
    case hora < 12: console.log('Bom dia');
    break;
    case hora >= 12: console.log('boa tarde');
    break;
    case hora >= 18: console.log('boa noite'); 
    break; 

    default: console.log('hora indefinida');
}


// Combinando o switch com uma funcção
function calculadora (num1, num2, operador) { 
    let resultado;

    switch (operador) {
        case '+': resultado = num1 + num2;
        break;
        case '-': resultado = num1 - num2;
        break;
        case '*': resultado = num1 * num2;
        break;
        case '/': resultado = num1 / num2;

        break;
        default: resultado = 'Opreador invalido'
    }

    console.log(resultado);
    return resultado;

 } calculadora(2, 5, '* ')




 