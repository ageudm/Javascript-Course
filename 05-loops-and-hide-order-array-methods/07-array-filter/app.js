// Array.prototype.filter()
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// Sintaxe
// var newArray = arr.filter(callback[, thisArg])


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const eventNumber = numbers.filter(function(number) {
    return number % 2 === 0;
}); console.log(eventNumber);

// aplicando o arrow functio
const filterNamber = numbers.filter((number) =>
    number % 3 === 0
); console.log(filterNamber);


// aplicando a mesma operação com o foreach
const listNamber = [];

numbers.forEach((number) => {
    if (number % 2 === 0) {
        listNamber.push(number)
    }
}); console.log(listNamber);

