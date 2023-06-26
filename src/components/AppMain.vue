<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
    computed: {

    }
}
</script>

<template >
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="film">
                        <ul>
                            <li class="m-4" v-for="(film, index) in store.filmsObj" :key="index">
                                <div class="film d-flex">
                                    <div class="me-3">{{ film.original_title }}</div>
                                    <div class="me-3">{{ film.original_title }}</div>
                                    <img :src="`../../node_modules/country-flag-icons/1x1/${film.original_language.toUpperCase()}.svg`"
                                        :alt="film.original_language.toUpperCase()">
                                    <div class="me-3">{{ film.vote_average }}</div>
                                </div>

                            </li>
                        </ul>
                    </div>

                    <div class="tv">
                        <ul>
                            <li v-for="(tv, index) in store.filmsObj" :key="index">
                                <div class="tv d-flex">
                                    <div class="me-3">{{ tv.name }}</div>
                                    <div class="me-3">{{ tv.original_name }}</div>
                                    <img :src="`../../node_modules/country-flag-icons/1x1/${tv.original_language.toUpperCase()}.svg`"
                                        :alt="tv.original_language.toUpperCase()">
                                    <div class="me-3">{{ tv.vote_average }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
img {
    width: 20px;
    height: 15px;
}

.tv {
    background-color: purple;
}

.film {
    background-color: blue;
}
</style>