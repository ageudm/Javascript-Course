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


// Herança
// um metodo que herda todas as propriedades do metodo inicial ou construtor, e pode tambem ser acrescntado outras prpriedades

function Magazine(title, author, pages, year, manth) {
  Book.call(this, title, author, pages, year);

  this.manth = manth;
}

// Incluir o prototype em uma herança
Magazine.prototype = Object.create(Book.prototype)

// Aplicar o metodo construtor na herança
Magazine.prototype.construtor = Magazine;

// atribuir a herança em um novo objecto
const obj1 = new Magazine('Minha Angola', 'Magi one', 500, 2020, 'Jun');

console.log(obj1);
console.log(obj1.read());






