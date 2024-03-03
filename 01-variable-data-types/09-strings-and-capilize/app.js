// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


let x;
const nome = "Magi";
const idade = "30";

x = 'Ola meu nme é ' + nome + ' e a minha idade é ' + idade + ' de idade';

// Template literal ou interpolação
x = `Ola, meu nome ${nome} e minha idade é ${idade} de idade`;

// Criação de objecto string
const objectoString = new String('Meu nome: Ageu Miguel');

console.log(x.toUpperCase());
console.log(x.charAt(2));
console.log(x.charAt(2).toUpperCase());
console.log(objectoString[1]);
console.log(objectoString.length);


