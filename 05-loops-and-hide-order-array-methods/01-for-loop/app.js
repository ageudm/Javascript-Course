// for
// A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

// Sintaxe
// for ([inicialização]; [condição]; [expressão final])
//    declaração

// declaração simples do ciclo for
for (let a = 0; a <= 10; a++) {
    // declaração / instrução
    console.log('soma = ' + a);
}

// associando inumeras declarações dentro do clclo
for (let a = 0; a <= 10; a++) {
    // declaração / instrução
    if (a === 4) {
        console.log('numero encotrado');
    } else {
        console.log('numero não encotrsdo');
    }
};



// aplicando um lupe dentro da outro para criar uma lista de tabuada
for (let i = 1; i <= 10; i++) {
    console.log('Linha: ' + i);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
};


// percorrer uma lista com o metodo for
const list = ['magi', 'numa', 'andre', 'sofia'];

for (let a = 0; a <= list.length; a++) {
    console.log(list[a]);
}
