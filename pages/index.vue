<template>
	<div :class="injectClass" class="gameScreen">
        <back-ground />
        <character />
        <message-window @hoge="hoge" :plot="plots" class="gameScreen__textBox"></message-window>
        <question v-if="question"></question>
        <bgm></bgm>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            question: state => state.question.question
        }),
    },
    async fetch({store, $axios }) {
        const plots = await $axios.$get(process.env.baseURL + '/hoge.json')
        store.commit("plot/SET_PLOT", plots)
    }
}
</script>

<style lang="scss" scoped>
.pc .gameScreen {
	&__inner {
		width: 100%;
		height: 800px;
        z-index: -1000;
	}
	&__textBox {
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 10;
	}
    &__timer {
        position: absolute;
        top: 20px;
        left:200px;
        z-index: 1000;
        color: #fff;
        font-size: 38px;
        text-align: center;
    }
}
.sp.gameScreen {
    width: 100%;
    height: 100vh;
    background: #000;
}
.sp .gameScreen {
	&__inner {
		width: 100%;
		height: 100vh;
		background: #000;
	}
    &__textBox {
		position: absolute;
		bottom: 40px;
		width: 100%;
		z-index: 10;
	}
}
</style>
