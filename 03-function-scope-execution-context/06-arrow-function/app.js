
//Arrow function syntax
const add1 = (a, b) => {
    return a + b;
};

//Forma simplificada de uma funcção com retorno
const add2 = (a, b) => a + b;
const add3 = (a) => a + 5;

//Retornar um objecto com arrow function
const createObject = () => ({
    name: 'Ageu',
    morada: 'Lad',
})

//percocorrer uma lista usndo arrow function com o forEach
const numeros = [1,2,3,4,5];
numeros.forEach((n) => console.log(n));

//Forma padram de aplicar  uma funcção com o forEach
numeros.forEach(function(n) {
    console.log(n)
});

console.log(add1(2,2));
console.log(add2(3,3));
console.log(add3(5));
console.log(createObject());
