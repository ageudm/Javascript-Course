// OBS: Estes opradores pemitem a avalição simplificada da função if 

// Logical OR assignment (||=)
// The logical OR assignment (||=) operator only evaluates the right operand and assigns to the left if the left operand is falsy.

let a = false;

// if (!a) {
//     a = 10;
// }

// simpplificando o a função if
// a = a || 30;
a ||= 40;

console.log(a);

// Logical AND assignment (&&=)
// The logical AND assignment (&&=) operator only evaluates the right operand and assigns to the left if the left operand is truthy.

let b = 20;

if (b) {
    b = 50;
}

// simplificando o if

b = b && 60;
b &&= 70;

console.log(b);


// Nullish coalescing assignment (??=)
// The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
let c = null;

// if (c ===  null ?? c === undefined) {
//     c = 100;
// }


// simplificando o if
c = c ?? 150;
c ??= 200;

console.log(c);



