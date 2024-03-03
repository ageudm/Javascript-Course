// for...in
// O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

// Syntax
// for (variavel in objeto) {...
// }



// neste Metodo a palavara chave key, representa de forma numerica cada elemento lidtado no objecto
const products = {
    product1: 'banana',
    product2: 'limao',
    product3: 'mandioca',
    product4: 'abacate',
    product5: 'ananas',
}

for (let key in products) {
    console.log(key, products[key]);
}


// aplicando o metodo em um Array
const listName = ['Ageu', 'numa', 'magi', 'alex']

for (let key in listName) {
    console.log(listName[key]);
}

