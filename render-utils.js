export function renderMovie(movie) {
    const anchor = document.createElement('a');
    const container = document.createElement('div');
    const movieImgEl = document.createElement('img');
    const titleEl = document.createElement('p');

    titleEl.textContent = movie.title;
    movieImgEl.src = setImgPath(movie.title);
    anchor.href = `./detail/?id=${movie.id}`;

    container.classList.add('movie');
    container.append(titleEl, movieImgEl);

    anchor.append(container);
    return anchor;
}

export function renderMovieDetails(movie) {
    const container = document.createElement('div');
    const titleEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const releaseDateEl = document.createElement('p');
    const rtScoreEl = document.createElement('p');
    const runtimeEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const directorEl = document.createElement('p');

    titleEl.textContent = `${movie.title}`;
    ratingEl.textContent = `${movie.rating}`;
    releaseDateEl.textContent = `${movie.released}`;
    rtScoreEl.textContent = `${movie.rtscore}`;
    runtimeEl.textContent = `${movie.runtime} minutes`;
    descriptionEl.textContent = `${movie.description}`;
    directorEl.textContent = `${movie.director}`;

    container.classList.add('movie-details');
    container.append(titleEl, ratingEl, releaseDateEl, rtScoreEl, runtimeEl, descriptionEl, directorEl);

    return container;
}

function setImgPath(title) {
    switch (title) {
        case 'Pig':
            return './assets/pig.jpeg';
        case 'Adaptation':
            return './assets/adaptation.jpeg';
        case 'Face/Off':
            return './assets/face-off.jpeg';
        case 'Moonstruck':
            return './assets/moonstruck.jpeg';
        case 'Raising Arizona':
            return './assets/raising-arizona.jpeg';
        case 'Red Rock West':
            return './assets/red-rock-west.jpeg';
        case 'Leaving Las Vegas':
            return './assets/leaving-las-vegas.jpeg';
        case 'Con Air':
            return './assets/conair.jpeg';
        default:    
            return '';
    }
}