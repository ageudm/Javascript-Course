//Uma funcção é um metodo que executa um conjunto de instruções

//exempo base
function lerDados() {
    console.log('ola angola');
};

//executar a funcção
lerDados();

//funcção com parametros
function somaNum(num1, num2) {
    console.log(num1 + num2);
};

//executar a funcçõo com paramero
somaNum(20, 10);

//Funcção com retorno
function subtrairNum(num1, num2) {
    return num1 - num2;
};

//Exectar a funcçao
const subt = subtrairNum(40, 10);
console.log(subt);
console.log(subtrairNum(20, 10));