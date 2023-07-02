<script>

import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    props: {
        myCardTv: Object
    },

    methods: {
        starVotes() {
            let roundedVote = this.myCardTv.vote_average;
            let vote = Math.round(roundedVote / 2);
            return vote
        },
        starNoVotes() {
            let noStar = 5 - this.starVotes()
            return noStar
        },
        actorsApi() {
            store.idTv = this.myCardTv.id

            store.fullCastUrl = `${store.firstPartCastUrl}${store.idTv}${store.lastPartCastUrl}`

            axios.get(store.fullCastUrl).then((res) => {
                store.castObj = res.data.cast
                console.log(store.castObj);
            });
            store.more = true

            //continua a darmi axios is undefined credo sia dovuto alla parte che non riesco a recuparare l'id, 
            // vedro di sistemarlo 
        },
    },
}
</script>

<template >
    <div>
        <div class="card m-2">
            <div class="position-relative">
                <div class="card-container bckg-black">
                    <div class="" v-if="(myCardTv.poster_path == null)">
                        <div class="img-container">
                            <img
                                src="https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg">
                        </div>
                    </div>
                    <div v-else>
                        <div class="img-container">
                            <img :src="`https://image.tmdb.org/t/p/w342/${myCardTv.poster_path}`">
                        </div>
                    </div>
                    <div class="overlay d-flex flex-column align-items-center text-center">
                        <h4 class="mt-1">{{ myCardTv.name }}</h4>
                        <span class="d-block">{{ myCardTv.original_name }}</span>
                        <img class="cntr-flag mt-2"
                            :src="`../../node_modules/country-flag-icons/1x1/${myCardTv.original_language.toUpperCase()}.svg`"
                            :alt="myCardTv.original_language.toUpperCase()">
                        <div class="star-container d-flex mt-3">
                            <div class="" v-for="vote in starVotes()"><i class="fa-star fa-solid vote-color"></i></div>
                            <div class="" v-for="vote in starNoVotes()"><i class="fa-star fa-solid"></i></div>
                        </div>
                        <div class="overview-container overflow-auto mt-4">
                            <p>{{ myCardTv.overview }}</p>
                        </div>

                        <div @click="actorsApi()" class="p-3">
                            <p class="more m-0">More...</p>
                            <div v-for=" (actors, index) in   store.castObj.slice(0, 5)  " :key="index"
                                :class="store.idTv === myCardTv.id ? 'd-block' : 'd-none'">
                                {{ actors.name }}
                            </div>
                            <!-- per certe seri Tv l'API e rott a non carica gli attori del film e fa vede gli attori del film precedente  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>