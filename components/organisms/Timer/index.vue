<template>
    <div class="timer">
        <p>オレの死まであと</p>
        <span id="seconds">{{ totalTime }}</span>秒
    </div>
</template>
<script>
export default {
    data () {
        return {
            timer: null,
            totalTime: 100
        }
    },
    methods: {
        countdown () {
            if (this.totalTime >= 1) {
                this.totalTime--
            } else {
                this.$router.push('/gameover')
            }

        },
        start () {
            this.timer = setInterval(() => this.countdown(), 1000);
            console.log(this.timer)
        },
    },
    created () {
        console.log('created')
        this.start()
    },
    beforeDestroy: function () {
        console.log('beforeDestroy')
        // タイマーの後始末をおこなう
        clearInterval(this.start())
    }
}
</script>