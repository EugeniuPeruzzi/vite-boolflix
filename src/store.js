import { reactive } from 'vue'

export const store = reactive({
    //appi urls
    filmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    tvUrl: 'https://api.themoviedb.org/3/search/tv?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    trendingUrl: 'https://api.themoviedb.org/3/trending/all/week?api_key=4b67cbd6fbd947d07786332b3eb7ee5a',
    apiKey: '4b67cbd6fbd947d07786332b3eb7ee5a',
    // aray that is going to be popolated from api 
    filmsObj: [],
    tvsObj: [],
    searchFilm: '',
    trendingsObj: [],
});