// DOM
// O Modelo de Objeto de Documentos (do inglês Document Object Model, DOM) é uma API definida pelo W3C para representar e interagir com qualquer documento HTML ou XML.

// o objecto window é o objecto pai que permitr ter acesso a todo os objecto e propredades manipuladas direitamente no Browser

// sintax para acessar a DOM
console.dir(window.document)


// O objceto document esta dentro do objecto window, ele permite acessar todos os objectos propriedades e metodos que podem ser manipuados dentro do documento HTML ou XML

// Acessando elementos no documwnto
console.log(document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.getElementsByTagName('h1'));
document.querySelector(h1).innerText = 'nova angoal';
