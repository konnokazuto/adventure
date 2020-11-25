<template>
	<!-- <div class="gameScreen">
    	<div class="gameScreen__inner">
    		<text-box class="gameScreen__textBox"></text-box>
      		<back-ground class="gameScreen__backGround"></back-ground>
    	</div>
	</div> -->
	<div>
		hoge
	</div>
</template>

<script>
import BranchScreen from '~/components/Organisms/BranchScreen'
import TextBox from '~/components/Organisms/TextBox'
import BackGround from '@/components/Molecules/BackGround'

export default {
	components: {
		BranchScreen,
		TextBox,
		BackGround
	},
	data () {
		return {
			isPlay: false
		}
	},
	/* methods: {
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
		const audioElement = document.querySelector('audio');
		const track = audioContext.createMediaElementSource(audioElement);
		console.log(track)
		track.connect(audioContext.destination);
	} */
}
</script>

<style lang="scss" scoped>
.gameScreen {
	&__inner {
		width: 100%;
		height: 800px;
		background: #fff;
	}
	&__textBox {
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 10;
	}
}
</style>
