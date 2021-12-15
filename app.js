import { getAllMovies } from './fetch-utils.js';
import { renderMovie } from './render-utils.js';
const moviesDivEl = document.querySelector('#movies');

window.addEventListener('load', async() => {
    const allMovies = await getAllMovies();

    for (let movie of allMovies) {
        const movieEl = renderMovie(movie);
        moviesDivEl.append(movieEl);
    }

});

