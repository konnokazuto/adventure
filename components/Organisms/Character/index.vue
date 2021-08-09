<template>
    <div class="textBox__character">
        <img v-if="imageUrl" :src="require(`@/assets/faceVariations/${imageUrl}`)" class="textBox__characterImage">
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            plotCount: state => state.plot.plotCount,
            plotNumber: state => state.plot.plotNumber,
        }),
        imageUrl () {
            return this.plots[this.plotNumber].face
        },

    }
}

</script>