// for...of
// O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

// Sintaxe
// for (variavel of iteravel) {
//   declaração
// }


const list = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];

// Percorrer os elementos da lista
for (let item of list) {
    console.log(item);
}

// Aplicando o methodo for of em uma lista de objectos
const products = [
    {product: 'Bnana'},
    {product: 'Limão'},
    {product: 'Abacate'},
    {product: 'Mandioca'},
];

for (let productItem of products) {
    console.log(productItem.product);
}


// Aplicando o metodo para listar as letras em uma string
const name = 'Ageu Miguel';

for (let charName of name) {
    console.log(charName);
}


// Aplicndo o for of em um objecto Map
const map =  new Map();
map.set('name', 'Ageu')
map.set('idade', 32)

for (let [key, value] of map) {
    console.log(key, value);
}