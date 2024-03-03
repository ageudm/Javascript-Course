//Volores armazendados em uma Stak
const nome = 'Magi';
const idade = 30;

//Referencia do valor aramzenado em uma Head
const pessoa = {
    nome: 'Ageu',
    ideda: 30,
}

let newNome = nome;
newNome = 'MagiOne';

let newPessoa = pessoa;
newPessoa.nome = 'Ageu Domingos Miguel'

console.log(nome, newNome);
console.log(pessoa, newPessoa);


