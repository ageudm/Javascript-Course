// Dom select elemente

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id); //vrificando o atributo id
console.log(document.getElementById('app-title').className); //Verificando agributo class
console.log(document.getElementById('app-title').getAttribute('id')); //pegar o atributo do elemnto
console.log(document.getElementsByClassName('title'));

// set atribute
document.getElementById('app-title').title = 'Shopping List'; //Aplicar um titlo ao elemnto
document.getElementById('app-title').setAttribute('class', 'magi') //adiciona um atributo ao elemento
console.log(document.getElementById('app-title'));

//Alterar o texto de um elemnto no documento
const title = document.getElementById('app-title');
title.textContent = 'Helo worde'; //Altera apenas o texo
title.innerHTML = 'Ageu Miguel'; //Altera texot e elmentos
title.innerHTML = '<strong>Titlo em neglito</strong>'
console.log(title.textContent);

//Aplicar estilos com javascript
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.borderRadius = '10px';
title.style.padding = '8px';

//Slectores css
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));  
console.log(document.querySelector('li:nth-child(2)').innerText);
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Ageu Magi';
secondItem.style.color = 'red';

