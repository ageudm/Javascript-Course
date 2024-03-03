
// Math  Object

let x;

x = Math.sqrt(18); //Retorna a rais quadrada de um valor;
x = Math.abs(-10); // Retorna o valor absoluto de um numero;
x = Math.round(4.4); //Retorna o valor aproximado do valor antrior ou a seguir;
x = Math.ceil(4.1); //Retorna o valor arredondado para cima;
x = Math.floor(3.9); //Retorna o valor aredondado para baixo;
x = Math.pow(2, 4) // Retorna o valor da base para potencia do espoente;
x = Math.min(4, 5, 3); //Retorna o menor valor entre os numeros;
x = Math.max(4, 5, 3); // Retorna o maior valor entre os numeros;
x = Math.random() //retorna umvalor alertorio com a base 0.380346025054076;
x = Math.ceil(Math.random()); // Fiz uma junção de metodos para arredondar o valor base do metodo Random;



//Funcção arredondar o valor para cima
function arredon(valor) {
    let x = Math.ceil(valor);

    console.log(x);
    
}

arredon(3.2); //Chamada da funcção;

console.log(x);