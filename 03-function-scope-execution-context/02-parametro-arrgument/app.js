//aplicar parametros padrão em uma funcção
function registerUser(user) {
    return user + ' está registrado';
};

console.log(registerUser('Ageu'));

//inicializar dados em um parametro
function novoUsuario(dados = 'Ageu Miguel') {
    return dados + ' esta na lista';
};

console.log(novoUsuario());

//Passart parametro como array
function listNum(...numbers) {
    return numbers;
};

console.log(listNum(1,2,3,4,5));

//combinar paramttor com um objecto
function loginUser(user) {
    return `O usuario ${user.nome} com id ${user.id} fez o login`;
};

//Objecto user
const user = {
    nome: 'Ageu domingos miguel',
    id: 1
};

//execuar a funcção
console.log(loginUser(user));