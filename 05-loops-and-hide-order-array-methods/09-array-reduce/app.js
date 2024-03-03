// Array.prototype.reduce()
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

// Sintaxe
// JS
// Copy to Clipboard
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])


// A função reducer recebe quatro parâmetros:

// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

// redusir um lista de numeros para gerar um unico valor
const nambers = [1, 2, 3, 4, 5];

const num = nambers.reduce(function(acumulator, currentValue) {
    return acumulator + currentValue;
}, 0)


// trabalhar com arrow functio
const num2 = nambers.reduce((acc, cur) => acc + cur, 5);


// apicar a mesma operação com o metodo for of
const totalValue = () => {
    let acc = 10;
    for (let number of nambers) {
        acc += number;
    }
    return acc;
}


// aplicar o metodo reduce a um carrinho de compra

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);



console.log(`Toatal: ${totalPrice.toFixed(2)} AOA`);
console.log(totalValue());

