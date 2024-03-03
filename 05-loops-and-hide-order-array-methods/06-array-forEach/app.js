// Array.prototype.forEach()
// O método forEach() executa uma dada função em cada elemento de um array.

// Sintaxe
// arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);


// forma simples de aplicar um array
const products = ['banana', 'batata', 'ananas', 'limao']

products.forEach(function(item) {
    console.log(item);
})

// aplicando arrow function
products.forEach((item) => 
    console.log(item)
)

// a invocação do argumento arr é opcional
products.forEach((item, index, arr) =>
    console.log(`${index}-${item}`,arr)
)


// formas diferente de aplicar o for a uma lista
// 1- criar a function que faz a leitura dos elemntos na lista
function productItem(item) {
    console.log(item);
}

// 2- invocar a função no metodo forEach como argumento
products.forEach(productItem)



// aplicando o metodo em uma lista de objecto
const socialMedia = [
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Twitter', url: 'https://facebook.com'},
    {name: 'linkedin', url: 'https://facebook.com'},
]

socialMedia.forEach((item) => console.log(item.url))

