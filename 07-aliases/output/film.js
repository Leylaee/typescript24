"use strict";
function averageRatingForMovie(movie) {
    let totaal = 0;
    for (let i = 0; i < movie.reviews.length; i++) {
        totaal += movie.reviews[i].rating;
    }
    return totaal / movie.reviews.length;
}
function topRatedMovies(movie) {
    return movie.filter(movie => averageRatingForMovie(movie) > 4);
}
const movie = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Science fiction",
        duration: 148,
        reviews: [
            {
                rating: 4.5,
                comment: "Een geweldige film!"
            },
            {
                rating: 5,
                comment: "Fantastische plot!"
            },
        ]
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        duration: 142,
        reviews: [
            {
                rating: 5,
                comment: "Meesterwerk!",
            },
            {
                rating: 4.5
            }
        ]
    },
    {
        title: "Rio Lobo",
        director: "Howard Hawks",
        releaseYear: 1970,
        genre: "Western",
        duration: 114,
        reviews: [
            {
                rating: 3.4
            },
            {
                rating: 3.5
            }
        ]
    }
];
