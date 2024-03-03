const d = new Date();
const hora = d.getHours();
const data = d.toString();


console.log('São ' + hora + ' Hora');

function lerData() {
    console.log(data);
}

if (hora < 12) {
    console.log('Bom dia');
    console.log(data);
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}