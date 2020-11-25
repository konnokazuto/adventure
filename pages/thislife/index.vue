<template>
	<div class="gameScreen">
        <div class="gameScreen__inner">
            <back-ground :background="plots.background" class="gameScreen__backGround"></back-ground>
            <text-box @hoge="hoge" :plot="plots" class="gameScreen__textBox"></text-box>
            <question v-if="question"></question>
            <!-- <timer class="gameScreen__timer"></timer> -->
            <!-- <Audio></Audio> -->
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import BranchScreen from '@/components/Organisms/BranchScreen'
import TextBox from '@/components/Organisms/TextBox'
import BackGround from '@/components/Molecules/BackGround'
import Timer from '@/components/Organisms/Timer'
import question from '@/components/Organisms/Question'
import results from '@/assets/json/kinoko.json'

export default {
	components: {
		BranchScreen,
		TextBox,
        BackGround,
        Timer,
        question
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
