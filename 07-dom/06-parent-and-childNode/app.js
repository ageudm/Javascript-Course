let output;

const parent = document.querySelector('.parent');

// Pegar uma lista de elementos com a propriedade nodelist
output = parent.childNodes;
output = parent.childNodes[1].innerText;
// pegar o primeiro e ultimo filho de uma lista
output = parent.firstChild;
output = parent.lastChild;


console.log(output);