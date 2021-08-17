<template>
    <div class="bgm">
		<div v-if="isPlay" @click="pause">
			BgmOff
		</div>
        <div v-else @click="play">
			BgmOn
		</div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    data () {
		return {
			isPlay: false,
			src: 'https://hakuhin.jp/download/js/audio/sample_00.wav'
		}
	},
	methods: {
		play () {
			this.isPlay = true
			this.$store.dispatch("audio/login", require('@/assets/bgm/' + this.plots[this.plotNumber].bgm + '.mp3'))
		},
		pause () {
			this.isPlay = false
			this.audioElement.pause()
		}
	},
	computed: {
		...mapState({
			plots: state => state.plot.plots,
			plotNumber: state => state.plot.plotNumber,
			audioElement: state => state.audio.audioElement,
        }),
		gameBgm () {
            return this.plots[this.plotNumber].bgm
        }
	},
	watch: {
		gameBgm (newValue) {
			if (this.isPlay) {
				this.$store.dispatch("audio/login", require('@/assets/bgm/' + newValue + '.mp3'))
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.bgm {
	position: absolute;
	top: 0;
	z-index: 100;
	font-family: "ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino";
	color: #fff;
	font-weight: bold;
}
</style>
