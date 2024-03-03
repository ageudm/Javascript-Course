// Resumo
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

// Sintaxe
// arr.map(callback[, thisArg])


const numebrs = [1, 2, 3, 4, 5];

const numberPar = numebrs.map((number) =>
    number * 2
); console.log(numberPar);


// aplicar o metodo foreach
const numberList = [];
numebrs.forEach((number) => {
    numberList.push(number * 2)
}); console.log(numberList);

