// while
// A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

// Syntax
// while (condição) {
//   rotina
// }


    let a = 0;
                        
while (a <= 10) {
    console.log('numero: ' + a);
    a++;
}

let b = 4;
let c = 1;

while (b > 0) {
    console.log(c*=b);
    b--;
}

let d = 0;
const list = ['magi', 'numa', 'ageu'];

while (d < list.length) {
    console.log(list[d]);
    d++;
}




// aplicndo while em uma tabuada
let j = 1;

while (j <= 5) {
    console.log('tabela ' +j);

    let h = 1;
    while (h <= 5) {
        console.log(`${j} * ${h} = ${j * h}`);
        h++;
    }

    j++;
}


// do...while
// A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

// Sintaxe
// do
//    statement
// while (condition);

let k = 0;

do {
    console.log(k);
    k++
}while (k <= 5);




