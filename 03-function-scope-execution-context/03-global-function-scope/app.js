//Os metodose e functions global são declarados fora do escopo

//Exeplos
//window.alert()
const nome = 'MAGI';

function run() {
    //console.log(window.innerHeight);
    console.log(nome, 'é programador');
};

run();

//Uma variavel global é retilizavel dentro do escopo de 

function lerNome() {
    console.log(nome);
};

lerNome();