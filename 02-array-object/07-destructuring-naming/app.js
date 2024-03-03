// Criar um objecto com os dados apartir de uma variavel

// Nomeclatura
const nome = 'magi';
const idade = 30;
const cidade = 'Angola';

const dados = {
    nome,
    idade,
    cidade
};

console.log(dados)

// Desconstruir um objecto
const produtos = {
    id: 1,
    description: 'Bnana',
    quantiade: 100
};

const {
    id: produtosId, 
    description, 
    quantiade
} = produtos;

console.log(produtosId);


