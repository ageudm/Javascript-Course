let x;

//Criação de um objecto

const person = {
    nome: 'Ageu Miguel',
    idade: 30,
    isAdmin: true,
    address: {
        rua: 'rua 7 quimbago',
        cidade: 'Kilamba',
        province: 'Luanda',
    },
//Um arry dentro do objecto
    hobbies: ['futebol', 'game'],
};



//Acessando elementos do ebjecto

x = person.nome;
x = person.idade;
x = person.address.cidade;
x = person.hobbies[0];

//deletar uma proppredade
delete person.idade;

//Add uma propredade como metodo no objecto
person.greet = function() {
    console.log(`Helo my name is ${this.nome}`);
}

const person2 = {
    'FarstName': 'Ageu',
    'LastNme': 'Miguel'
}

person.greet();
console.log(x);
console.log(person)