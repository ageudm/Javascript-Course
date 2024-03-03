// Metodo constructor
// O metodo constructor é um metodo especial que é chamado no momento da criação de um objeto, ou seja, quando utilizamos a palavra chave new.

// Sintaxe
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages

  this.read = function() {
    return `Estou lendo ${this.title} do autor ${this.author}`
  }
}

// Inicializar objetos
const book1 = new Book('Clean Code', 'Robert C. Martin', 464)
const book2 = new Book('Clean Code', 'Ageu D. Miguel', 464)

console.log(book1.author);
console.log(book1.read());
