
let x, b;

//Criar um objecto construtor
const dados = new Object();

dados.nome = 'Ageu Miguel';
dados.idade = 30;
dados.naconalidade = 'Angola';

x = dados;

// Passar objeto em uma Keys para criar um novo objecto
const novosDados = Object.keys(dados);
novosDados.nome = 'Magi';
console.log(novosDados)

// O methodo create cria um novo objecto apartir da rais do objecto passado como parametro
const dados2 = Object.create(dados);
dados2.cidade = 'angola';
console.log(dados2)

// Criar uma lista de objectos
const obj1 = {a: 1, b: 2};
const obj2 = {a: 3, b: 4};

const obj3 = {obj1, obj2};

//concaenar objetos
const obj4 = {...dados, ...obj1};
const obj5 = Object.assign({}, obj1, obj2);

// Acessando o elemento em uma lista de objctos
console.log(obj3.obj1.a)

// Criar um array com uma lista de objetos
const listPordct = [
    {id: 1, produto: 'Manga'},
    {id: 2, produto: 'Banana'},
    {id: 3, produto: 'Limão'}
];

b = listPordct;

console.log(b[0].produto)
console.log(x);
console.log(obj3);
console.log(obj4);
console.log(obj5);