import { getMovie } from '../fetch-utils.js'; 
import { renderMovieDetails } from '../render-utils.js';

const movieDetailContainer = document.querySelector('#movie-details');
const headTitleEl = document.querySelector('#head-title');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const movieID = params.get('id');

    const movieData = await getMovie(movieID);

    const movieEl = renderMovieDetails(movieData);

    headTitleEl.textContent = `Nicolas Cage: ${movieData.title}`;
    movieDetailContainer.append(movieEl);
});