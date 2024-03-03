// Valores falsos everdadeiro

// VALORES COM RESULTADOS FALSO POR PADRÃO

// false
// 0
// "" or '' (empyt string)
// null
// undefined
// NaN

// VALORES COM RESULTADOS VERDADEIRO POR PADRÃO
// tudo que apresenta um valor diferente de false

// true
// '0'
// ' ' espaço em uma string
// 'false' false em string
// [] emppty array
// {} empty Object
// function () {} empty function

const x = NaN;

if (x) console.log('is true');
else console.log('is false');

// combinando valres falso e verdadeiro
const children = 0;

if (children) console.log(`Voce tem ${children} children na lista`);
else console.log('porfavor informa o numrode criança');

// Outra solução mais simplificada
const children2 = 0;

if (!isNaN(children)) console.log(`Voce tem ${children2} children na lista`);


// Aplicando a mesama tecnica em um array
// um array vasio tem o valor verdadeiro como padrão
// para determinar se o array esta vasio ou noa devemos usar a prop length para verificar a quantidade de elmentos na lista
const posts = []

if (posts.length > 0) console.log('list post');
else console.log('post vasio');

// aplicando a mesma tecnica em objectos
const user = {
    name: 'Ageu'
}

if (Object.keys(user).length > 0) {
    console.log(`${user.name} esta activo`);
}else console.log('dados de usuario vasio');



// verificando direitamente valores falso
console.log(false == 0);