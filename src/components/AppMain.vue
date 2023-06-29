<script>
import { store } from '../store.js';

import AppCardFilm from './AppCardFilm.vue';
import AppCardTv from './AppCardTv.vue';
import AppTrending from './AppTrending.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCardFilm,
        AppCardTv,
        AppTrending,
    },

}
</script>

<template >
    <div>
        <div class="container mb-5">
            <div class="row text-center spare-margin">
                <h1 class="mb-5 " :class="store.trendingsObj.length === 20 ? 'd-block' : 'd-none'">Di tendenza questa
                    settimana
                </h1>
                <div class="col-12 d-flex flex-wrap align-items-center justify-content-center">
                    <div class="" v-for="( trending, index ) in  store.trendingsObj " :key="index">
                        <AppTrending :myTrending="trending" />
                    </div>
                </div>
                <h1 class="mt-4 " :class="store.filmsObj == 0 ? 'd-none' : 'd-block'">Film</h1>
                <div class="col-12 d-flex flex-wrap align-items-center justify-content-center h overflow-auto"
                    :class="store.filmsObj == 0 ? 'd-none' : ''">
                    <div class="" v-for="( film, index ) in  store.filmsObj " :key="index">
                        <AppCardFilm :myCardFilm="film" />
                    </div>
                </div>
                <h1 class="m-4" :class="store.tvsObj == 0 ? 'd-none' : 'd-block'">Serie Tv</h1>
                <div class="col-12 d-flex flex-wrap align-items-center justify-content-center h overflow-auto mb-5"
                    :class="store.tvsObj == 0 ? 'd-none' : ''">
                    <div class="" v-for="( tv, index ) in  store.tvsObj " :key="index">
                        <AppCardTv :myCardTv="tv" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.h {
    height: 900px;
}

h1 {
    text-shadow: 2px 2px black;
    color: rgb(255, 0, 0);
}

.spare-margin {
    margin-top: 100px;
}
</style>