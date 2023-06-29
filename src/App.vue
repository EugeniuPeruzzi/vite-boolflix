<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeaderSearch from './components/AppHeaderSearch.vue';
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeaderSearch,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(store.trendingUrl).then((res) => {
      store.trendingsObj = res.data.results;
      //store.loading = false
      console.log(store.trendingsObj);
    });
  },
  methods: {

    trendingFilm() {
      if (store.searchFilm === '') {

      }
    },


    getFilm() {

      if (store.searchFilm !== '') {
        store.filmUrl += `&query=${store.searchFilm}`;
        axios.get(store.filmUrl).then((response) => {
          store.filmsObj = response.data.results;
          //store.loading = false
          console.log(store.filmsObj);
        });

        store.tvUrl += `&query=${store.searchFilm}`;
        axios.get(store.tvUrl).then((response) => {
          store.tvsObj = response.data.results;
          //store.loading = false
          console.log(store.tvsObj);
        });
        store.trendingsObj = 0
      }
      else {
        store.tvsObj = 0
        store.filmsObj = 0
        axios.get(store.trendingUrl).then((res) => {
          store.trendingsObj = res.data.results;
          //store.loading = false
          console.log(store.trendingsObj);
        });
      }
    },
  }
}
</script>

<template>
  <AppHeaderSearch @filmSearch="getFilm" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>
