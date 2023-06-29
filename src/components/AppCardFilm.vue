<script>
export default {
    props: {
        myCardFilm: Object
    },
    mounted() {
        this.starVotes()
        this.starNoVotes()
    },
    methods: {
        starVotes() {
            let roundedVote = this.myCardFilm.vote_average;
            let vote = Math.round(roundedVote / 2);
            return vote
        },
        starNoVotes() {
            let noStar = 5 - this.starVotes()
            return noStar
        }
    },
}
</script>

<template >
    <div>
        <div class="card m-2">
            <div class="position-relative">
                <div class="card-container bckg-black">
                    <div class="img-container">
                        <img :src="`https://image.tmdb.org/t/p/w342/${myCardFilm.poster_path}`">
                    </div>
                    <div class="overlay d-flex flex-column align-items-center text-center">
                        <h4 class="mt-1">{{ myCardFilm.title }}</h4>
                        <span class="d-block">{{ myCardFilm.original_title }}</span>
                        <img class="cntr-flag mt-2"
                            :src="`../../node_modules/country-flag-icons/1x1/${myCardFilm.original_language.toUpperCase()}.svg`"
                            :alt="myCardFilm.original_language.toUpperCase()">
                        <div class="star-container d-flex mt-3">
                            <div class="" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                            <div class="" v-for="vote in starNoVotes()"><i class="fa-star fa-solid"></i></div>
                        </div>
                        <div class="overview-container overflow-auto mt-4">
                            <p>{{ myCardFilm.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>