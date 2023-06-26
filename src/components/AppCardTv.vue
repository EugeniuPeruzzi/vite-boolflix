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
            console.log(vote);
            return vote
        }
    },
}
</script>

<template >
    <div>
        <div class="tv">
            <ul>
                <li>
                    <div class="tv d-flex">
                        <img :src="`https://image.tmdb.org/t/p/w342/${myCardTv.poster_path}`" alt="">
                        <div class="me-3">{{ myCardTv.name }}</div>
                        <div class="me-3">{{ myCardTv.original_name }}</div>
                        <img class="cntr-flag"
                            :src="`../../node_modules/country-flag-icons/1x1/${myCardTv.original_language.toUpperCase()}.svg`"
                            :alt="myCardTv.original_language.toUpperCase()">
                        <div class="me-3" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.tv {
    background-color: darkcyan;
}
</style>