"use strict";
function findBookByAuthor(book, author) {
    return book.find(book => book.author === author) || null;
}
function filterBooksByYear(book, year) {
    return book.filter(book => book.publishedYear === year);
}
const book = [
    {
        title: "The Catcher in the Rye",
        author: "J.D Salinger",
        publishedYear: 1951,
        ISBN: "978-0-316-76948-0"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        ISBN: "978-0-06-112008-4"
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        ISBN: "978-0-452-28423-4"
    }
];
console.log(findBookByAuthor(book, "J.D Salinger"));
const boek2 = findBookByAuthor(book, "George Orwell");
console.log(boek2);
