import { getMovie } from '../fetch-utils.js'; 
import { renderMovieDetails } from '../render-utils.js';

const movieDetailContainer = document.querySelector('#movie-details');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const movieID = params.get('id');

    const movieData = await getMovie(movieID);

    const movieEl = renderMovieDetails(movieData);
    movieDetailContainer.append(movieEl);
});