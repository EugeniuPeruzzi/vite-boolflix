<script>
export default {
    props: {
        myTrending: Object
    },
    mounted() {
        this.starVotes()
    },
    methods: {
        starVotes() {
            let roundedVote = this.myTrending.vote_average;
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
                <span
                    class="badge text-bg-primary position-absolute centerd-lable rounded-pill">{{ myTrending.media_type }}</span>
                <div class="card-container bckg-black">
                    <div class="img-container">
                        <img :src="`https://image.tmdb.org/t/p/w342/${myTrending.poster_path}`">
                    </div>
                    <div class="overlay d-flex flex-column align-items-center text-center">
                        <h4 class="mt-1">{{ myTrending.name }}</h4>
                        <span class="d-block">{{ myTrending.original_name }}</span>
                        <img class="cntr-flag mt-2"
                            :src="`../../node_modules/country-flag-icons/1x1/${myTrending.original_language.toUpperCase()}.svg`"
                            :alt="myTrending.original_language.toUpperCase()">
                        <div class="star-container d-flex mt-3">
                            <div class="" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                            <div class="" v-for="vote in starNoVotes()"><i class="fa-star fa-solid"></i></div>
                        </div>
                        <div class="overview-container overflow-auto mt-4">
                            <p>{{ myTrending.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.centerd-lable {
    top: 3%;
    left: 10px;
    font-size: 1rem;
}
</style>