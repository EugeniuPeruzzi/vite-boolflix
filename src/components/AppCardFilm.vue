<script>
export default {
    props: {
        myCardFilm: Object
    },
    mounted() {
        this.starVotes()
    },
    methods: {
        starVotes() {
            let roundedVote = this.myCardFilm.vote_average;
            let vote = Math.round(roundedVote / 2);
            console.log(vote);
            return vote
        }
    },
}
</script>

<template >
    <div>
        <div class="film">
            <ul>
                <li class="">
                    <img :src="`https://image.tmdb.org/t/p/w342/${myCardFilm.poster_path}`" alt="">
                    <div class="film d-flex">
                        <div class="me-3">{{ myCardFilm.original_title }}</div>
                        <div class="me-3">{{ myCardFilm.original_title }}</div>
                        <img class="cntr-flag"
                            :src="`../../node_modules/country-flag-icons/1x1/${myCardFilm.original_language.toUpperCase()}.svg`"
                            :alt="myCardFilm.original_language.toUpperCase()">
                        <div class="me-3" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.film {
    background-color: darkblue;
}
</style>