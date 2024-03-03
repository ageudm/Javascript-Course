// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.



const a = 10;

if (a >= 10) {
    console.log(a);
} else {
    console.log('insere um numero 10');
}


// usando o operador ternario
a >= 10 ? console.log(a) : console.log('porfavor informe o numero 10');

// associando uma opeação condicional a uma variavel
const b = a >= 10 ? a : 'o numero nao esta correto';

console.log(b);


// Aplicando varios resultados em uma condição
const auth = true;
// let redirect;

// if (auth) {
//     alert('bemvindo a deshibord');
//     redirect = '/deshbaord';
// } else {
//     alert('efectuar login');
//     redirect = '/login'
// }


// simplificando com o operador ternario
const redirect = auth 
? (alert('bemvindo ao deshbaord'), '/deshbaord') : (alert('acesso negado'), '/login');

console.log(redirect);