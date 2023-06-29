<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
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
        },
        actorsApi() {
            store.idMovie = this.myCardFilm.id

            store.fullCastUrl = `${store.firstPartCastUrl}${store.idMovie}${store.lastPartCastUrl}`

            axios.get(store.fullCastUrl).then((res) => {
                store.castObj = res.data.cast
                console.log('adfufnbeufgnbufngu');
            });

            //continua a darmi axios is undefined credo sia dovuto alla parte che non riesco a recuparare l'id, 
            // vedro di sistemarlo 
        },
    },
}
</script>

<template >
    <div>
        <div class="card m-2" @click="actorsApi()">
            <div class="position-relative">
                <div class="card-container bckg-black">
                    <div class="" v-if="(myCardFilm.poster_path == null)">
                        <div class="img-container">
                            <img
                                src="https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg">
                        </div>
                    </div>
                    <div v-else>
                        <div class="img-container">
                            <img :src="`https://image.tmdb.org/t/p/w342/${myCardFilm.poster_path}`">
                        </div>
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
                        <button @click="actorsApi()">More...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>