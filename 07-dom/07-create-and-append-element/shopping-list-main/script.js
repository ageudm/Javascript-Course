// Metodos para criar elementos com javascript

// para a crição de Elementos com JS podemos usar o metodo document.createElement();

const div = document.createElement('div');
div.className = 'newElement';
div.id = 'NewId';
div.setAttribute('title', 'newTatle');

// manipular o elemento criado
// div.innerText = 'Texto do novo elemento';
const texto = document.createTextNode('Angola é um pais lindo');
div.appendChild(texto);
div.style.fontSize = '25px';
div.style.fontWeight = 'bold';
div.style.color = '#ec3355';

// Add o novo elemento no meu docuento html
document.body.appendChild(div)
document.querySelector('ul').appendChild(div)


console.log(div);