// Metodo constructor
// O metodo constructor é um metodo especial que é chamado no momento da criação de um objeto, ou seja, quando utilizamos a palavra chave new.

// Sintaxe
function Book(title, author, pages, year) {
  this.title = title
  this.author = author
  this.pages = pages
  this.year = year
}


// prototype
// prototype é um objeto que contem metodos e propriedades que podem ser acessadas por outros objetos.  

Book.prototype.read = function() {
  return `Estou lendo ${this.title} do autor ${this.author}`
}

// verificar o tempo de existencia do livro
Book.prototype.getAge = function() {
  const curenteYear = new Date().getFullYear() - this.year;
  return `O livro ${this.title} existe a ${curenteYear} anos`;
}

// criar uma funçao que adicione um novo autor
Book.prototype.changeAuthor = function(newAuthor) {
  this.author = newAuthor
}

// Inicializar objetos
const book1 = new Book('Clean Code', 'Robert C. Martin', 464, 2008)
const book2 = new Book('Clean Code', 'Ageu D. Miguel', 464, 2021)


book1.changeAuthor('Magi one');
console.log(book1);
console.log(book1.getAge());



