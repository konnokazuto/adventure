<template>
    <div v-if="gameOver" :class="injectClass" class="gameOver">
        <div class="gameOver__contents">
            <p class="gameOver__text">Game Over</p>
            <div class="gameOver__button">途中からやり直す</div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            plotCount: state => state.plot.plotCount,
            plotNumber: state => state.plot.plotNumber,
        }),
        gameOver () {
            return this.plots[this.plotNumber].gameOver
        },
    }
}
</script>
<style lang="scss" scoped>
.sp.gameOver {
	position: absolute;
	top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	z-index: 10000;
	font-family: "ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino";
    background: #000;
	color: #fff;
    padding-top: 40%;
}

.sp .gameOver {
    &__text {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 50px;
        opacity: 0;
        animation: 2s fadein 0.5s forwards;
    }
    &__button {
        border: 5px solid #04b6b8;
        border-radius: 10px;
        background-color: rgba(241,255,255,.4);
        width: 90%;
        height: 100px;
        margin-bottom: 18px;
        box-sizing: border-box;
        line-height: 90px;
        cursor: pointer;
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        margin: 0 auto;
        opacity: 0;
        animation: 2s fadein 1.5s forwards;
    }
    @keyframes fadein{
        100%{
            opacity: 1;
        }
}
}
</style>
