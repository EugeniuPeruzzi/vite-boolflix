<script>
export default {
    props: {
        myCardTv: Object
    },
    mounted() {
        this.starVotes()
    },
    methods: {
        starVotes() {
            let roundedVote = this.myCardTv.vote_average;
            let vote = Math.round(roundedVote / 2);
            return vote
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
                        <img :src="`https://image.tmdb.org/t/p/w342/${myCardTv.poster_path}`">
                    </div>
                    <div class="overlay d-flex flex-column align-items-center text-center">
                        <h4 class="mt-1">{{ myCardTv.name }}</h4>
                        <span class="d-block">{{ myCardTv.original_name }}</span>
                        <img class="cntr-flag mt-2"
                            :src="`../../node_modules/country-flag-icons/1x1/${myCardTv.original_language.toUpperCase()}.svg`"
                            :alt="myCardTv.original_language.toUpperCase()">
                        <div class="star-container d-flex mt-3">
                            <div class="" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                        </div>
                        <div class="overview-container overflow-auto mt-4">
                            <p>{{ myCardTv.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>