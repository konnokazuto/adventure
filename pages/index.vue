<template>
	<div :class="injectClass" class="gameScreen">
        <!-- <back-ground /> -->
        <!-- <character /> -->
        <!-- <message-window @hoge="hoge" :plot="plots" class="gameScreen__textBox"></message-window> -->
        <div class="textBox__characterName" :class="{pink: plots[plotNumber].color}">{{plots[plotNumber].character}}</div>
        <div :class="{pink: plots[plotNumber].color}" class="textBox__main">
            <div>
                <div class="aho" v-text="text">
                </div>
            </div>
            <button @click="slideNextText" :class="{pink: plots[plotNumber].color}" class="textBox__button">Next</button>
        </div>
        <!-- <question v-if="question"></question> -->
        <!-- <bgm></bgm> -->
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
            question: state => state.question.question
        }),
        text () {
            return this.plots[this.plotNumber].message[this.plotCount]
        },
    },
    async fetch({store, $axios }) {
        const plots = await $axios.$get(process.env.baseURL + '/hoge.json')
        console.log(plots)
        store.commit("plot/SET_PLOT", plots)
    },
    methods: {
        slideNextText() {
            if (this.plotCount + 1 >= this.plots[this.plotNumber].message.length) {
                if(this.plotNumber + 1 === this.plots.length) {
                    this.$store.commit('question/SET_QUESTION', this.plot[this.plotNumber].choices)
                    this.$store.commit('question/SHOW_QUESTION')
                    return
                }
                this.$store.commit('plot/ADD_PLOT_NUMBER')
                this.$store.commit('plot/RESET_PLOT_COUNT')
                return
            }
            this.$store.commit('plot/ADD_PLOT_COUNT')
        },
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
