//challenge ou desafio

//funcçao para calcular grau celcius

// function getCelcius(f) {
//     const celcius = ((f - 32) * 5) / 9;
//     return celcius;
// }

// console.log(getCelcius(32));

//criar a mesma funcção com irrow functio
const getCelcius = (f) => ((f - 32) * 5) / 9;
console.log(`O tempo actual é de ${getCelcius(50)} \xB0C`)

//criar uma fncção que retorna o valor min e max de um array
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    //Imprimindo o valor
    console.log(min);
    console.log(max);

    //retornando um objecto
    return {
        min,
        max,
    }
}

minMax([1,2,3,4,5]);
console.log(minMax([1,2,3,4,5]));

//Criar Uma anoima ou IIFE para calcular a area de um retagulo
// ((length, width) => {
//     const area = length * width;
//     const output = `a area do retangulo tem um tamanho de ${length} e um cumprimento de ${width} com uma area de ${area}`;

//     console.log(output);
// })(10, 5);

((dado1, dado2) => {
    const somaDados = dado1 + dado2;
    console.log(somaDados);
})(2, 4);