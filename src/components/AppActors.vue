<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,
        }
    },
    props: {
        myActors: Object
    }
}
</script>

<template >
    <div>
        <span>{{ myActors.original_name }}</span>
    </div>
</template>
<style lang="scss" scoped></style>