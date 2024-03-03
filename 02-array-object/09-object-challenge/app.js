// Object challenge é a transforação de objecto

//Exemplo de uma lista
const bibilioteca = [
    //Obejecto dentro da lista
    {
        title: 'Angola linda',
        author: 'Magi one',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'Marketing limpo',
        author: 'Ageu Miguel',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'TI inovador',
        author: 'Magi',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
];

// Acessar a lista e mudar estado de uma proprieade
bibilioteca[0].status.read = true;
bibilioteca[1].status.read = true;
bibilioteca[2].status.read = true;


const {title: oneBock} = bibilioteca[0];
console.log(oneBock);

//Converter para JSON
const bibJSON = JSON.stringify(bibilioteca);
console.log(bibJSON);