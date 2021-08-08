<template>
    <div class="bgm">
        <button @click="play">
			BgmOn
		</button>
		<button @click="pause">
			BgmOff
		</button>
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
			this.$store.dispatch("audio/login", require('@/assets/bgm/' + this.plots[this.plotNumber].bgm + '.mp3'))
		},
		pause () {
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
			this.$store.dispatch("audio/login", require('@/assets/bgm/' + newValue + '.mp3'))
		}
	}
}
</script>
<style lang="scss" scoped>
.bgm {
	position: absolute;
	top: 0;
	z-index: 10000;
}
</style>
