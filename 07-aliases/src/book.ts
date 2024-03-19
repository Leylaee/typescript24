interface Book  {
    title : string;
    author : string;
    publishedYear : number;
    ISBN : string;
}

type BookList = Book[];

function findBookByAuthor(book : BookList, author: string): Book|null{
        return book.find(book => book.author === author) || null;
}

function filterBooksByYear(book: BookList, year : number) : BookList {
    return book.filter(book => book.publishedYear === year);
}

const book : BookList = [
    {
        title : "The Catcher in the Rye",
        author : "J.D Salinger",
        publishedYear : 1951,
        ISBN : "978-0-316-76948-0"
    },
    {
        title : "To Kill a Mockingbird",
        author : "Harper Lee",
        publishedYear : 1960,
        ISBN : "978-0-06-112008-4"
    },
    {
        title : "1984",
        author : "George Orwell",
        publishedYear : 1949,
        ISBN : "978-0-452-28423-4"
    }
];