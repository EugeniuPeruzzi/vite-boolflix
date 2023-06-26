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
                    <div class="col-6 d-flex p-4">
                        <input class="form-control" type="text" list="datalistOptions" id="exampleDataList"
                            placeholder="Cerca il tuo film" v-model="store.searchFilm" @keyup.enter="$emit('filmSearch')">
                        <button type="button" class=" ms-5 btn btn-primary" @click="$emit('filmSearch')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>