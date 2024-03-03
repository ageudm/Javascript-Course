// Introdução ao Json

// Criar um documento JSON usando uma objecto literal
const post = {
    id: 1,
    title: 'post one',
    body: 'this de body'
};

// Converter em JSON
const str = JSON.stringify(post);

/**  OBS
 * Para ter o acesso a as propriedades de uma lista em Json
 * é necessario faser a conversão do odcumento para um   ojecto literal
 */

//Passar para obj literal
const obj = JSON.parse(str);

//Acessar propriedade no documento
const x = obj.id;

//Criar uma lista de objectos
const posts = [
    {
        id: 1,
        title: 'post one',
        body: 'this de body'
    },
    {
        id: 2,
        title: 'post two',
        body: 'this de body'
    },
    {
        id: 3,
        title: 'post three',
        body: 'this de body'
    },
];

//Converter em JSON
const str2 = JSON.stringify(posts);

console.log(x);
console.log(str);
console.log(obj );
console.log(str2);