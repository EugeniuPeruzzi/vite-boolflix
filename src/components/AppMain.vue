<script>
import { store } from '../store.js';

import AppCardFilm from './AppCardFilm.vue';
import AppCardTv from './AppCardTv.vue'
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCardFilm,
        AppCardTv,
    },

}
</script>

<template >
    <div>
        <div class="container">
            <div class="row">
                <div class="col-auto d-flex flex-wrap align-items-center">
                    <div class="" v-for="(film, index) in store.filmsObj" :key="index">
                        <AppCardFilm :myCardFilm="film" />
                    </div>
                    <div class="" v-for="(tv, index) in store.tvsObj" :key="index">
                        <AppCardTv :myCardTv="tv" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>