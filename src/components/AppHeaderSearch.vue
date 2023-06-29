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
            <div
                class="row d-flex align-items-center justify-content-evenly py-3  position-fixed z-3 top-0 start-0 end-0 z-bckgrnd">
                <div class="col-2">
                    <a href="/">
                        <h1><strong>Boolflix</strong></h1>
                    </a>
                </div>
                <div class="col-3">
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

.z-bckgrnd {
    background-color: #212529;
}
</style>