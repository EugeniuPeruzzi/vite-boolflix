<script>
import axios from 'axios';
import { store } from './store.js';
import AppFilmMain from './components/AppFilmMain.vue';

export default {
  // dico di utilizzare le componenti chiamate
  components: {
    AppFilmMain,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {

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
