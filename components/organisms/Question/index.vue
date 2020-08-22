<template>
    <div class="question">
        <div class="question__inner">
            <div class="question__topic">
                {{ choices.topic }}
            </div>
            <ul class="question__lists">
                <li v-for="(item, index) in choices.branch" :key="index" @click="choice" class="question__list">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState ({
            choices: state => state.question.choices
        })
    },
    methods: {
        choice () {
            this.$store.commit("question/SHOW_QUESTION")
        }
    },
}
</script>
<style lang="scss" scoped>
.question {
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
</style>
