<template>
    <div>
        <button @click="play">
    		<span>Play/Pause</span>
		</button>
		<audio src="@/assets/bgm/n94.mp3"></audio>
    </div>
</template>
<script>
export default {
    data () {
		return {
			isPlay: false
		}
	},
	methods: {
		play () {
			const audioElement = document.querySelector('audio');
			if (this.isPlay) {
				audioElement.pause()
				this.isPlay = !this.isPlay
			} else {
				audioElement.play()
				this.isPlay = !this.isPlay
			}
		}
	},
	mounted () {
		const audioContext = new AudioContext();
		const audioElement = document.querySelector('audio');
		const track = audioContext.createMediaElementSource(audioElement);
		console.log(track)
		track.connect(audioContext.destination);
	}
}
</script>
