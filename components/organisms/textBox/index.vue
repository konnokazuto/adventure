<template>
    <div class="textBox" :class="injectClass">
        <div class="textBox__inner" :class="injectClass">
            <div class="textBox__character">
                <img :src="require(`@/assets/faceVariations/${imageUrl}`)" class="textBox__characterImage">
            </div>
            <div v-if="boxShow" class="textBox__characterName" :class="{pink: plot[plotNumber].color}">{{plot[plotNumber].character}}</div>
            <div v-if="boxShow" :class="{pink: plot[plotNumber].color}" class="textBox__main">
                <div>
                    <div class="aho">
                        {{ text }}
                    </div>
                </div>
                <button @click="hoge" :class="{pink: plot[plotNumber].color}" class="textBox__button">Next</button>
            </div>
            <div class="textBox__background">
                <img :src="require(`@/assets/backgroundImage/${backgroundUrl}`)" alt="hoge">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    props: {
        plot: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            boxShow: true
        }
    },
    computed: {
        ...mapState({
            plotCount: state => state.plot.plotCount,
            plotNumber: state => state.plot.plotNumber,
        }),
        imageUrl () {
            return this.plot[this.plotNumber].face
        },
        text () {
            return this.plot[this.plotNumber].message[this.plotCount]
        },
        backgroundUrl () {
            return this.plot[this.plotNumber].background
        }   
    },
    methods: {
        hoge() {
            if (this.plotCount + 1 >= this.plot[this.plotNumber].message.length) {
                if(this.plotNumber + 1 === this.plot.length) {
                    this.$store.commit('question/SET_QUESTION', this.plot[this.plotNumber].choices)
                    this.$store.commit('question/SHOW_QUESTION')
                    return
                }
                this.$store.commit('plot/RESET_PLOT_COUNT')
                this.$store.commit('plot/ADD_PLOT_NUMBER')
            }
            this.$store.commit('plot/ADD_PLOT_COUNT')
        }
    }
}

</script>

<style lang="scss" scoped>
.pc .textBox {
    &__character {
        text-align: center;
    }
    &__characterImage {
        width: 290px;
        height: 400px;
        object-fit: cover;
    }
    &__characterName {
        line-height: .755;
        width: 290px;
        height: 77px;
        top: 14px;
        left: 320px;
        position: relative;
        color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 17px;
        padding-left: 30px;
        font-weight: 700;
        font-size: 25px;
        background-image: url('~@/assets/backgroundImage/name-bg-man.png');
    }
    &__characterName.pink {
        background-image: url('~@/assets/backgroundImage/name-bg.png');
    }
    &__main {
        width: 800px;
        height: 222px;
        margin: 0 auto;
        color: #393536;
        line-height: 1.5;
        border-style: solid;
        border-width: 5px;
        border-color: #04b6b8;
        border-radius: 10px;
        background-color: rgba(255,250,250,.8);
        padding: 30px 25px;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        position: relative;
        font-size: 32px;
    }
    &__main.pink {
        border-color: #ea1e63;
    }
    &__button {
        color: #fff;
        border-style: solid;
        border-width: 6px;
        border-color: #fff;
        background-color: #04b6b8;
        border-radius: 30px;
        position: absolute;
        width: 200px;
        font-size:35px;
        height: 60px;
        line-height: 46px;
        display: block;
        right: -20px;
        top: 190px;
        text-align: center;
        text-decoration: none;
        transition: all .35s;
        &:hover {
            border-color: #04b6b8;
        }
        &:active {
            transform: translateY(4px);/*下に動く*/
        }
    }
    &__button.pink {
        background-color: #ea1e63;
        &:hover {
            border-color: #ea1e63;
        }
    }
    @keyframes show {
        0% {
            opacity: 0;
        }
    }
    &__hoge {
        display: inline-block;
        min-width: 0.3em;
        font-size: 2rem;
        animation: show 1s cubic-bezier(0.22, 0.15, 0.25, 1.43) 1s backwards;
    }
    &__background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1000;
    }
    &__background img {
        width: 100%;
        height: 100%;
    }
}

.sp .textBox {
    &__inner {
        position: absolute;
        bottom:5vh;
        right:0;
        left:0;
        z-index: 1000;
    }
    &__character {
        text-align: center;
        margin: 0 auto;
        width: 70%;
        width: 250px;
        height: 250px;
    }
    &__characterImage {
        height: 100%;
        object-fit: cover;
    }
    &__characterName {
        line-height: .755;
        width: 290px;
        height: 77px;
        top: 14px;
        position: relative;
        color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 17px;
        padding-left: 30px;
        font-weight: 700;
        font-size: 25px;
        background-image: url('~@/assets/backgroundImage/name-bg-man.png');
    }
    &__characterName.pink {
        background-image: url('~@/assets/backgroundImage/name-bg.png');
    }
    &__main {
        width: 100%;
        height: 40vh;
        margin: 0 auto;
        color: #393536;
        line-height: 1.5;
        border-style: solid;
        border-width: 5px;
        border-color: #04b6b8;
        border-radius: 10px;
        background-color: rgba(255,250,250,.8);
        padding: 30px 25px;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        position: relative;
        font-size: 1.5rem;
        z-index: 1000;
    }
    &__main.pink {
        border-color: #ea1e63;
    }
    &__button {
        color: #fff;
        border: 6px solid #fff;
        background-color: #04b6b8;
        border-radius: 30px;
        position: absolute;
        width: 200px;
        font-size:35px;
        height: 60px;
        display: block;
        bottom: -5vh;
        right: 0;
        text-align: center;
        text-decoration: none;
        transition: all .35s;
        &:hover {
            border-color: #04b6b8;
        }
        &:active {
            transform: translateY(4px);/*下に動く*/
        }
    }
    &__button.pink {
        background-color: #ea1e63;
        &:hover {
            border-color: #ea1e63;
        }
    }
    @keyframes show {
        0% {
            opacity: 0;
        }
    }
    &__hoge {
        display: inline-block;
        min-width: 0.3em;
        font-size: 2rem;
        animation: show 1s cubic-bezier(0.22, 0.15, 0.25, 1.43) 1s backwards;
    }
}

@keyframes show{
    0% {
        transform: translate(0, -20px);
        opacity: 0;
    }
}
.name-box {
    background-image: url('~@/assets/backgroundImage/name-bg-man.png');
}


.text-box {
    width: 92%;
    bottom: 50px;
    margin: 0 auto;
}

</style>
