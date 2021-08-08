<template>
    <div class="backGround">
        <div class="backGround__backLayer"></div>
        <img :src="require(`@/assets/background/${backgroundImg}`)" alt="背景画像" class="backGround__image">
    </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    props: {
        background: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            plotCount: state => state.plot.plotCount,
            plotNumber: state => state.plot.plotNumber,
        }),
        backgroundImg() {
            return this.plots[this.plotNumber].background || "black.png"
        }
    },
}
</script>
<style lang="scss" scoped>
.backGround {
    &__backLayer {
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.3);
        backdrop-filter: blur(4px);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index:9;
    }
    &__image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index:8;
        object-fit: cover;
    }
}
</style>