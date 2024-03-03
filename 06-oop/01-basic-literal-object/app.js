// OOP
// OOP (Object-Oriented Programming) é uma abordagem na programação em qual os dados são encapsulados em objects e o proprio objeto é operado, em vez de suas partes componentes.

// Sintaxe de um objeto literal
const book = {
  title: 'Clean Code',
  author: 'Robert C. Martin',
  pages: 464,

  // aplicar metodo no objecto
  read: function() {
    return `Estou lendo ${this.title}`
  }
}

// Acessando propriedades de um objeto
console.log(book.title)
// Acessando metodo de um objeto
console.log(book.read())

// verificar as propriedades de um objeto
console.log(Object.keys(book))

// verificar os valores das propriedades de um objeto
console.log(Object.values(book))

