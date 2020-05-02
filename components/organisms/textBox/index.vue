<template>
    <div class="textBox">
        <div class="hoge2" :style="backgroundImage()"></div>
        <div class="character">
            <img :src="imageUrl" class="">
        </div>
        <div class="textBox__name" id="js-name-box">{{plot[plotNumber].character}}</div>
        <div class="textBox__main" id="js-text-box-main">
            <div id="js-text-box-main-inner" class="text-box-main-inner">
                <div>
                    {{ text }}
                    <!-- <span
                        v-for="(item, index) in text"
                        :key="index"
                        :style="{animationDelay: index*40+'ms'}"
                        class="hoge"
                    >
                        {{ item }}
                    </span> -->
                    <!-- <span
                        v-for="(item, index) in text"
                        :key="index"
                        class="hoge"
                    >
                        {{ item }}
                    </span> -->
                </div>
            </div>
            <button @click="hoge()" class="textBox__button">Next</button>
        </div>
    </div>
</template>
<script>
import atomText from '~/components/Atoms/AtomText'
import BranchScreen from '~/components/Organisms/BranchScreen'
import { mapState } from "vuex";

export default {
    components: {
        atomText
    },
    data() {
        return {
            plot: [
                {
                    character: 'エンマ',
                    background: require('@/assets/backgroundImage/upstairs.jpg'),
                    face: require('@/assets/faceVariations/enmadaiou.png'),
                    message: [
                        '次の死者入れ！',
                        'ん……？',
                        'あーあ、お前か？前世の記憶がないってやつは。'
                    ]
                },
                {
                    character: 'ボク',
                    face: require('@/assets/faceVariations/enmadaiou.png'),
                    message: [
                        'はい、自分が一体誰なのか',
                        'そもそもなんで死んだのかまったく思い出せないんです。',
                    ]
                },
                {
                    character: 'エンマ',
                    background: require('@/assets/backgroundImage/upstairs.jpg'),
                    face: require('@/assets/faceVariations/enmadaiou.png'),
                    message: [
                        'お前さんねぇ、今どきそんな嘘ついたって天国には行けはしねぇのよ。',
                        'でもまぁ',
                        'お前にチャンスをやろう。。'
                    ]
                },

            ],
            text:'',
            isShow: false,
            count: -1,
            plotNumber: 0,
            url: '@/components/assets/backgroundImage/upstairs.jpg'
        }
    },
    computed: {
        imageUrl() {
            return this.plot[this.plotNumber].face
        }
    },
    methods: {
        hoge() {
            this.count++;
            this.text = this.plot[this.plotNumber].message[this.count]
            if (this.count >= this.plot[this.plotNumber].message.length) {
                this.count = 0
                this.plotNumber++
                this.text = this.plot[this.plotNumber].message[this.count]
            }
            return
            /* this.$store.commit('setCounter')
            this.text = this.texthoge[this.$store.state.counter]
            this.$store.commit('setFaceVariation', 5) */
             /* this.imageUrl = require("@/assets/faceVariations/necchusyou_face_girl" + slug + ".png"); */
            /* const TextMessage = this.text
            console.log(TextMessage);
            this.text = texthoge */
        },
        backgroundImage () {
            return {
                backgroundImage: 'url(' + this.plot[this.plotNumber].background + ')',
                width: '100%',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                transition: 'all 1s ease-out',
                position: 'absolute',
                zIndex: '-10'
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.textBox {
    &__name {
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
    }
    &__main {
        width: 100%;
        height: 222px;
        color: #393536;
        line-height: 1.5;
        border-style: solid;
        border-width: 5px;
        border-color: #04b6b8;
        border-radius: 10px;
        background-color: rgba(255,250,250,.8);
        padding: 30px 25px;
        font-weight: 700;
        cursor: pointer;
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
    }
}
#js-text-box {
    position:absolute;
    bottom:100px;
    left:50px;
    font-size: 35px;
}
#js-text-box-main {
    position:relative;
}
@keyframes show{
    0% {
        opacity: 0;
    }
}
.hoge {
    animation:show 0.09s linear 0s backwards;
    font-size:30px;
}
.hoge.is-show {
    opacity:1;
}

.character {
    text-align: center;
    img {
        width:350px;
    }
}

.name-box {
    background-image: url('~@/assets/backgroundImage/name-bg-man.png');
}

.transitionRate {
    color:red;
}
.text-box {
    width: 92%;
    bottom: 50px;
    margin: 0 auto;
}

.textox .name-box {
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
}
.text-box-main {
    border-color: #ea1e63;
}
.text-box .text-box-main {
    width: 100%;
    height: 222px;
    color: #393536;
    line-height: 1.5;
    border-style: solid;
    border-width: 5px;
    border-color: #04b6b8;
    border-radius: 10px;
    background-color: rgba(255,250,250,.8);
    padding: 30px 25px;
    font-weight: 700;
    cursor: pointer;
}

.text-box .next-btn {
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
}
</style>
