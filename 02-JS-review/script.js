const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBook(3);
/*
books
const title = books.title;
const author = books.author;
title;
author;
*/

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  books;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenre = [...genres, "epic fantasy"];
newGenre;

const updateBook = {
  ...books,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updateBook;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}- page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

//function getYear(str) {
//  return str.split("-")[0];
//}
//console.log(getYear(publicationDate));

console.log(false && "Some string");
console.log(hasMovieAdaptation && "This Book has a movie");

// falsy: 0, '', null, undefined
console.log("Atharva" && "Some String");
console.log(0 && "Some String");

console.log(true || "some string");
console.log(false || "some string");

console.log(books.translations.spanish);

const spanishTranslation = books.translations.spanish || "NOT TRANSALTED";
spanishTranslation;

console.log(books?.reviews?.librarything?.reviewsCount);
const countWrong = books?.reviews?.librarything?.reviewsCount || "no data";
countWrong;

const count = books.reviews.librarything?.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book) {
  const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(books));

const bookss = getBooks();
bookss;

const x = [1, 2, 3, 4, 5].map((el, index) => el * 2 + index);
console.log(x);

const titles = bookss.map((book) => book.title);
titles;

const essebtialData = bookss.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essebtialData;

const longBooks = bookss
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = bookss
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const pagesAllBoosk = bookss.reduce((acc, book) => acc + book.pages, 0);
pagesAllBoosk;

const arr = [3, 7, 1, 9, 6];
const sortedASC = arr.slice().sort((a, b) => a - b);
sortedASC;
const sortedDESC = arr.slice().sort((a, b) => b - a);
sortedDESC;
arr;

const sortedByPages = bookss.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterInsert = [...bookss, newBook];
booksAfterInsert;

//2) Delete book object from array
const booksAfterDelete = booksAfterInsert.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update books object in array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1209 } : book
);
booksAfterUpdate;

/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

const todos = await getTodos();
console.log(todos);
