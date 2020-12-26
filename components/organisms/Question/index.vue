<template>
    <div class="question" :class="injectClass">
        <div class="question__inner">
            <div class="question__contents">
                <div class="question__topic">
                    {{ choices.topic }}
                </div>
                <ul class="question__lists">
                    <li v-for="(item, index) in choices.branch" :key="index" @click="choice(item.value)" class="question__list">
                        {{ item.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState ({
            choices: state => state.question.choices,
            audioElement: state => state.audio.audioElement,
        })
    },
    methods: {
        async choice (value) {
            console.log(value)
            const plots = await this.$axios.$get(`/plot/${value}.json`)
            this.$store.commit("plot/SET_PLOT", plots)
            this.$store.commit('question/SHOW_QUESTION')
            this.$store.commit('plot/RESET_PLOT_COUNT')
            this.$store.commit('plot/RESET_PLOT_NUMBER')
            this.audioElement.currentTime = 0
        }
    },
}
</script>
<style lang="scss" scoped>
.pc .question {
    &__inner {
        width: 100%;
        height: 100%;
        z-index: 10000;
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: .85;
    }
    &__topic {
        color: #fff;
        font-size: 36px;
        font-weight: 700;
        margin: 0 auto;
        text-align: center;
        width: 600px;
        margin-top: 100px;
    }
    &__lists {
        width: 900px;
        margin: 100px auto 0;
    }
    &__list {
        border: 5px solid #04b6b8;
        border-radius: 10px;
        background-color: rgba(241,255,255,.4);
        width: 100%;
        height: 100px;
        margin-bottom: 18px;
        box-sizing: border-box;
        line-height: 90px;
        cursor: pointer;
        text-align: center;
        font-size: 30px;
        font-weight: 700;
    }
    &__list:hover {
        border-color: #ea2b8c;
        background-color: rgba(241,255,255,.8);
    }
}
.sp .question {
    &__inner {
        width: 100%;
        height: 100%;
        z-index: 10000;
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: .85;
    }
    &__contents {
        position: absolute;
        width: 100%;
        top: 20vh;
    }
    &__topic {
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 20px;
        text-align: center;
    }
    &__lists {
        width: 100%;
    }
    &__list {
        border: 5px solid #04b6b8;
        border-radius: 10px;
        background-color: rgba(241,255,255,.4);
        margin: 0 auto;
        width: 90%;
        height: 20%;
        margin-bottom: 18px;
        box-sizing: border-box;
        line-height: 2;
        cursor: pointer;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
    }
    &__list:hover {
        border-color: #ea2b8c;
        background-color: rgba(241,255,255,.8);
    }
}
</style>
