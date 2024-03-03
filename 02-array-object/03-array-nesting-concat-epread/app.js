// nasting-concat and 
let x;

const fruits = ['apple', 'pear', 'orange'];
const listName = ['Magi', 'numa', 'Ageu miguel'];

// Com a fucção push, é possivel acrescentar uma lista de ntro da outra

//fruits.push(listName);
//x = fruits[3][0]; acessar a lista

//concatenar ou juntar as listas
//com esta tecnica, tambem é possivel criar um array multiplo
const todasListas = [fruits, listName];
x = todasListas[0][3];

//concatenar apartir de uma funcção
x = fruits.concat(listName);

//operador espread  (...)
x = [...fruits, ...listName] // junta os dados do array
x = [...fruits, listName] //acresceta um array em outro

const arr = [1, 2, [3, 4], 5, [6, 7], 8];//arr multiplo

x = arr[2][1]

//converter um array multiplo em uma lista
x = arr.flat();

//metodo estatico no array object
//este metodo é uma condição que avalia o objecto se é um array ou nao
x = Array.isArray(arr);





console.log(arr);
console.log(x);