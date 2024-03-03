
// Object of prtops
const booksProto = {
  read: function() {
    return `Estou lendo ${this.title} do autor ${this.author}`
  },
  
  getAge: function() {
    const curenteYear = new Date().getFullYear() - this.year;
    return `O livro ${this.title} existe a ${curenteYear} anos`;
  }
}


// Criar um novo objecto
const book3 = Object.create(booksProto);
book3.title = 'Minha Angola';
book3.author = 'Ageu D. Miguel';
book3.year = 2020;

// Outra forma de criar um novo objecto
const book4 = Object.create(booksProto, {
  title: {value: 'Luanda Limpa'},
  author: {value: 'Efesos Miguel'},
  year: {value: 2010},
})


console.log(book4.getAge());



