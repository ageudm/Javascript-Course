// Sintraxe de consstrução de uma classe
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSunery() {
        return `O ${this.title} é um livro escrito por ${this.author}, em ${this.year}`
    }

    getYear() {
        const currentYear = new Date().getFullYear() - this.year;
        return `O livro ${this.title} existe a ${currentYear} anos`
    }

    getData(newYear) {
        this.year = newYear;
        this.revided = true;
    }

    static topBookStore() {
        return `Barnes and Nobles`;
    }
}


// instaciando o objecto para um novo objecto
const book1 = new Book('Minha angola', 'Ageu Miguel', 2015)
book1.getData(2020)



// Trabalhando com subclass ou classes extendidas
// Uma sbclasse tem a mesma funcção com a herança
class MagiBook extends Book {
    constructor(title, author, year, manth) {
        super(title, author, year); //Esta funcção inporta as propriedades do construtor da classe pai
        this.manth = manth;
    }
}

const magiB = new MagiBook('Magi Book','Magi One','2021', 'Jan');

console.log(book1.getSunery());
console.log(book1.getYear());
console.log(Book.topBookStore());