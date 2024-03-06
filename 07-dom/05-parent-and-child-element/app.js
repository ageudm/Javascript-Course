// trabalhar com elementos pai e filho

let output;

// seleccionar o elemento pai
const parent = document.querySelector('.parent');
// selecionar os elementos filho de um parente
output = parent.children;

output = parent.children[1].innerText = 'Ageu Miguel';
output = parent.children[1].className;
output = parent.children[1].nodeName;
output = parent.children[1].style.color = '#ec3355';

output = parent.firstElementChild.innerText = 'Primeiro filho';
output = parent.lastElementChild.innerText = 'Ultimo filho';

// Usando parntelement para manipular o objecto ou o elemento involvente
const child = document.querySelector('.child');
child.parentElement.style.border = '1px solid #000000';
child.parentElement.style.padding = '10px';
output = child.parentElement; // Imprime a classe involvente

// Buscando elementos com a subclass do css
const secondItem = document.querySelector('.child:nth-child(2)');
secondItem.style.color = 'blue';
// Pegar o elemnto a seguir na llista
const nextElement = secondItem.nextElementSibling;
nextElement.innerText = 'Proximo elemento'
//Pegar o elemento anterior
const prevItem = secondItem.previousElementSibling;
prevItem.innerText = 'Elemnto antrior'




console.log(output);
console.log(nextElement);