// Array 

let x;

// Array Literal
const listNmb = [1, 2, 3, 4, 5];
const listMixed = ['Ageu', 2, true, null];

// Array Construtor
const fruts = new Array('manga', 'pitaia', 'ananas', 'manga');

x = listNmb;
x = listNmb[0] //slecionar o item na lilsta
x = listMixed[0];
x = listNmb.length;

x = fruts;
x = fruts[0];

//Add elementos na lista com o metodo length
x = fruts[fruts.length] = 'limao';
x = fruts;

//Add uma lista dentro de um Array
x = new Array(listMixed)

console.log(x);