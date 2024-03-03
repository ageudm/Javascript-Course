// Propriedades do objecto document para acessar os elementos dentro do documento html


let output; 

// Prop para pegar uma lista geral do documento
output = document.all;
output = document.all[2];
// verificar a quantidade de elemntos no documento
output = document.all.length;
// acessar os elementos direitamente
output = document.documentElement;
output = document.head;
output = document.body;
// Acessar a propriedade filho de um elemento
output = document.head.children;
output = document.body.children;
// Acessar prpriedades que identificam oa documento
output = document.URL;
output = document.domain;
output = document.doctype;
output = document.characterSet;
output = document.contentType;
// Trabalhar com formuarios
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].action;
output = document.forms[0].method;
// Acessar links
output = document.links;
output = document.links[0];
output = document.links[0].href;
// Acessar imagens
output = document.images;
output = document.images[0];
output = document.images[0].src;




console.log(output);
