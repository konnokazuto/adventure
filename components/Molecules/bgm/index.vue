<template>
    <div>
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
export default {
    data () {
		return {
			isPlay: false,
			src: 'https://hakuhin.jp/download/js/audio/sample_00.wav'
		}
	},
	methods: {
		play () {
			this.audioElement.play()
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
        })
	},
	mounted () {
		const audio = new Audio()
		this.$store.commit("audio/setAudioElement", audio)
		/* this.$store.commit("audio/setAudioUrl", this.plots[this.plotNumber].bgm)
		console.log(this.plots[this.plotNumber].bgm)
		console.log(this.$store.state.audio.audioUrl) */
		this.audioElement.src = require('@/assets/bgm/saiban.mp3')
		this.audioElement.loop = true;
		/* const audioContext = new AudioContext();
		const audioElement = document.querySelector('audio');
		const track = audioContext.createMediaElementSource(audioElement);
		console.log(track)
		track.connect(audioContext.destination); */
	}
}
</script>
