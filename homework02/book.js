module.exports.Book = class Book {
  static counter = 0;
  constructor(name, author, year, genre) {
    this.id = Book.counter++;
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
};
