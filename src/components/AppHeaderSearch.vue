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
            <div class="row d-flex align-items-center justify-content-evenly p-2 my-3">
                <div class="col-4">
                    <h1><strong>Boolflix</strong></h1>
                </div>
                <div class="col-5">
                    <div class="d-flex">
                        <input class="form-control" type="text" list="datalistOptions" id="exampleDataList"
                            placeholder="Cerca il tuo film" v-model="store.searchFilm" @keyup.enter="$emit('filmSearch')">
                        <button type="button" class=" ms-3 btn btn-primary" @click="$emit('filmSearch')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
strong {
    font-size: 3rem;
    color: red;
}

h1 {
    text-shadow: 2px 2px black;
}
</style>