// JavaScript code​​​​​​‌​‌​​‌‌‌‌‌‌‌​​‌​‌​‌‌​​​‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.status = "available"; // Added status property
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}, Status: ${this.status}`;
  }
}

/**
 * Extend the Book class with Fiction and NonFiction classes.
 */
// Your code starts here.

class Fiction extends Book {
  constructor(title, author, publicationYear, genre) {
    super(title, author, publicationYear);
    this.genre = genre;
  }

  getDetails() {
    return `${super.getDetails()}, Genre: ${this.genre}`;
  }
}

class NonFiction extends Book {
  constructor(title, author, publicationYear, subject) {
    super(title, author, publicationYear);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Your code ends here.

class Library {
  constructor(books, users, librarian) {
    this.books = [];
    this.users = [];
    this.librarian = null; // single librarian
  }

  /**
   * Add the following methods:
   * - addBook(book)
   
   * - removeBook(title)
   * - findBook(title)
   */
  // Your code starts here.

  addBook(book) {
    this.books.push(book);

    return `Book "${book.title}" added. There are now ${this.books.length} books in the library.`;
  }

  removeBook(title) {
    const isExisting = this.books.find((book) => book.title === title);

    if (isExisting) {
      this.books = this.books.filter((book) => book.title !== title);
      return `Book "${title}" removed. There are now ${this.books.length} books in the library.`;
    }
    return `Book "${title}" not found.`;
  }

  findBook(title) {
    const isExisting = this.books.find((book) => book.title === title);

    if (isExisting) return `Book titled ${title} is in the library.`;
    return `Book titled ${title} not found.`;
  }

  // Your code ends here.
}

const book01 = {
  title: "Odyssey",
  author: "Homer",
  pubYear: 1726,
  genre: "Coming of Age",
};

const book02 = {
  title: "The Yellow Wallpaper",
  author: "Charlotte Perkins Gilman",
  pubYear: 1892,
  genre: "Womens rights",
};

const book03 = {
  title: "The Book of Bread",
  author: "Owen Simmons",
  pubYear: 1903,
  genre: "Baking",
};

// Create a library with books, a librarian, and users
const library = new Library();
console.log(
  library.addBook(
    new Fiction(book01.title, book01.author, book01.pubYear, book01.genre)
  )
);
console.log(
  library.addBook(
    new Fiction(book02.title, book02.author, book02.pubYear, book02.genre)
  )
);
console.log(
  library.addBook(
    new NonFiction(book03.title, book03.author, book03.pubYear, book03.genre)
  )
);

// Test capabilities of the library
const result = () => {
  console.log(library.findBook("Odyssey")); // Book titled "Odyssey" is in the library
  console.log(library.findBook("Silo")); // Book titled "Silo" not found.
  console.log(library.removeBook("Odyssey")); // Book "Odyssey" removed. There are now 2 books in the library.
};
