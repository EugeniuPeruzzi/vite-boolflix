<script>
import { store } from '../store.js';


export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template >
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <li v-for="(film, index) in store.filmsObj" :key="index">
                            <div class="film d-flex">
                                <div class="me-3">{{ film.original_title }}</div>
                                <div class="me-3">{{ film.original_title }}</div>
                                <div class="me-3">{{ film.original_language }}</div>
                                <div class="me-3">{{ film.vote_average }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>