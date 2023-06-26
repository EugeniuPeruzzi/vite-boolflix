import { reactive } from 'vue'

export const store = reactive({
    filmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    tvUrl: 'https://api.themoviedb.org/3/search/tv?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    // searchUrl: '',
    apiKey: '4b67cbd6fbd947d07786332b3eb7ee5a',
    filmsObj: [],
    tvsObj: [],
    searchFilm: '',
});