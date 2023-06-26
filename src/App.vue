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
    this.getFilm()
  },
  methods: {
    getFilm() {

      if (store.searchFilm !== '') {
        store.filmUrl += `&query=${store.searchFilm}`
        store.tvUrl += `&query=${store.searchFilm}`
      }

      axios.get(store.tvUrl).then((response) => {
        store.tvsObj = response.data.results;
        //store.loading = false
        console.log(store.tvsObj);
      })

      axios.get(store.filmUrl).then((response) => {
        store.filmsObj = response.data.results;
        //store.loading = false
        console.log(store.filmsObj);
      })

    }
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
