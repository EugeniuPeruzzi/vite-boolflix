<script>
import axios from 'axios';
import { store } from './store.js';
import AppFilmMain from './components/AppFilmMain.vue';

export default {
  components: {
    AppFilmMain,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(store.apiUrl).then((response) => {
      store.filmsObj = response.data.results;
      console.log(store.filmsObj);
    })
  },
  methods: {

  }
}
</script>

<template>
  <AppFilmMain />
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>
