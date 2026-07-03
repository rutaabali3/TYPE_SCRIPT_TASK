"use strict";
const movies = [
    { movieId: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, releasedYear: 2010 },
    { movieId: 2, title: "Interstellar", genre: "Sci-Fi", rating: 8.7, releasedYear: 2014 },
    { movieId: 3, title: "The Dark Knight", genre: "Action", rating: 9.0, releasedYear: 2008 },
    { movieId: 4, title: "Parasite", genre: "Thriller", rating: 8.5, releasedYear: 2019 },
    { movieId: 5, title: "Oppenheimer", genre: "Biography", rating: 8.3, releasedYear: 2023 },
];
console.log("All Movies:");
console.table(movies);
console.log("Movies With Rating Greater Than 8:");
console.table(movies.filter((movie) => movie.rating > 8));
const latestMovie = movies.reduce((latest, current) => current.releasedYear > latest.releasedYear ? current : latest);
console.log("Latest Released Movie:");
console.table([latestMovie]);
