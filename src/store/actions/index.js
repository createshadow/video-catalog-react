export const findFilm = text => ({
    type: 'FIND_FILM',
    payload: text
});

export const loadAllFilms = films => ({
    type: 'LOAD_ALL_FILMS',
    payload: films
});

export const getFilms = () => ({
    type: 'GET_FILMS'
});