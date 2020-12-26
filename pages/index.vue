<template>
	<div class="gameScreen">
        <div class="gameScreen__inner">
            <text-box @hoge="hoge" :plot="plots" class="gameScreen__textBox"></text-box>
            <question v-if="question"></question>
            <bgm></bgm>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import TextBox from '@/components/Organisms/TextBox'
import Timer from '@/components/Organisms/Timer'
import question from '@/components/Organisms/Question'
import bgm from '@/components/Molecules/bgm'

export default {
	components: {
		TextBox,
        Timer,
        question,
        bgm
    },
    data () {
        return {
            img: require('@/assets/backgroundImage/dining.jpg'),
            items: null
        }
    },
    computed: {
        ...mapState({
            plots: state => state.plot.plots,
            question: state => state.question.question
        }),
        /* doneTodosCount () {
            return this.$store.getters.plots
        } */
    },
    async fetch({store, $axios }) {
        const plots = await $axios.$get('/hoge.json')
        store.commit("plot/SET_PLOT", plots)
        // OR
        // const users = await $axios.$get('http://localhost:3000/axios-assets-json')
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
.sp .gameScreen {
	&__inner {
		width: 100%;
		height: 100%;
		background: #000;
	}
}
</style>
