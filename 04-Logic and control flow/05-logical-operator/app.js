// Estudos dos opreadores logicos

let a;
let b;
let c;

// OPERADORES DE CONJUÇÃO (&&)
// este operador so retorna o valor verdadeiro se ambos os lados forem verdadeiro.
// e so avalia a opração a direita se o esquerdo for verdadeiro
a = 20 && 30;
a = 20 && 30 && 40;
a = 20 && 0 && 30;
a = 20 && '' && 0 && 30;
a = false && true; //false
a = true && false; //false
a = false && false; //false
a = true && true; //true

// Aplpicando uma condição com o oprador de Conjução
const list = ['ageu', 'magi'];
list.length > 0 && console.log(list[0]);


// OPERADORE DE DISJUNÇÃO (||)
// este operador retorna o valor verdadeiro se pelo menos uma das opração for verdadeira
// e so avalia olado direito se esquerdo for falso
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

// OPERADOR DE COALECENCIA (??)
// O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
c = 10 ?? 20;
c = null ?? 20;
c = undefined = 30;
c = 0 ?? 40;
c = '' ?? 50;


console.log(c);
console.log(a);
console.log(b);



