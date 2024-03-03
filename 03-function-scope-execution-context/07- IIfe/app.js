/** 
 * IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida
 */

/** Para nao é possivel declarar uma variavel global com o mesmo nome apesar de estar em folha de script diferrente */

//erro de repetição de variavel local
// const user = 'Miguel';
// console.log(user);


//Declarando uma funcção com expreção imediata, ou seja sem qualquer nome
(function () {
    const user = 'Ageu';
    console.log(user);
    const hello = () => console.log('hello from the IIFE');
    hello();
})();

(function (name) {
    console.log('hello ' + name);
})('Ageu Miguel');

(function hello() {
    console.log('function hello')
})();

(function () {
    const name = 'Magi one'
    console.log(name);
})();


