
//implementar uma funcção dentro de outra funcçao

function first() {
    const x = 100;

    function soma() {
        const y = 200;
        console.log(x + y);
    }; soma();

}; first();

