import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    // searchUrl: '',
    apiKey: '4b67cbd6fbd947d07786332b3eb7ee5a',
    filmsObj: [],
    searchFilm: '',
});