<template>
    <div class="character">
        <img :class="imageUrl" :src="require(`@/assets/faceVariations/${imageUrl}.png`)" class="character__characterImage">
        <div class="character__subWindow">
            <img v-if="subWindow" :src="require(`@/assets/subwindow/${subWindow}`)" class="character__subWindowImage">
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    data () {
        return {
            imageUrlShow: true
        }
    },
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            plotCount: state => state.plot.plotCount,
            plotNumber: state => state.plot.plotNumber,
        }),
        imageUrl () {
            return this.plots[this.plotNumber].face
        },
        subWindow () {
            if (this.plots[this.plotNumber].subWindow !== null) {
                return this.plots[this.plotNumber].subWindow
            }
            return
        }

    }
}

</script>
<style lang="scss" scoped>
.pc .character {
    text-align: center;
    &__characterImage {
        width: 220px;
        height: 320px;
        object-fit: cover;
    }
}
.sp .character {
    &__characterImage {
        width:  180px;
        height: 240px;
        object-fit: cover;
    }
    &__characterImage.enmadaiou {
        width: 220px;
    }
    &__subWindow {
        position: absolute;
        top: -100px;
        right: 10px;
        background: #ddd;
        border: 2px solid #000;
        border-radius: 4px;
        animation: img-wrap 1s cubic-bezier(.4, 0, .2, 1);
    }
    &__subWindowImage {
        width: 100px;
    }
    @keyframes img-wrap {
        0% {
            clip-path: circle(0 at 50% 50%);
            -webkit-clip-path: circle(0 at 50% 50%);
        }

        100% {
            clip-path: circle(100% at 50% 50%);
            -webkit-clip-path: circle(100% at 50% 50%);
        }
    }
}
</style>