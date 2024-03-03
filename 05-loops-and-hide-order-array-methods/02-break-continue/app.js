// a funcção break serve para dar um paragem a operação do ciclo

for (let a = 0; a <= 20; a++) {
    if (a === 10) {
        console.log('achei o nmero 10');
        break;
    }

    console.log(a);
}


// alicando o continue
for (let b = 0; b <= 20; b++) {
    if (b === 15) {
        console.log('achei o numero 15');
        continue;
    }

    console.log(b);
}