<template>
    <div class="text-box pink" id="js-text-box">
        <div class="character">
            <img :src="imageUrl" class="">
        </div>
        <div class="name-box" id="js-name-box">ありさん</div>
        <div class="text-box-main" id="js-text-box-main">
            <div id="js-text-box-main-inner" class="text-box-main-inner">
                <div>
                    <span v-for="(item, index) in text1"
                    key="item"
                    :style="{ animationDelay: index*40+'ms' }"
                    class="hoge">{{ item }}</span>
                </div>
            </div>
            <button @click="hoge()" class="next-btn blue">Next</button>
        </div>
    </div>
</template>
<script>
import atomText from '~/components/atoms/atomText'
export default {
    components: {
        atomText
    },
    data() {
        return {
            text: [
                    '吾輩は猫である。名前はまだない。どこで生れたか頓（とん）と見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
                    'しかもあとで聞くとそれは書生という人間中で一番獰悪（どうあく）な種族であったそうだ。',
                    'の書生というのは時々我々を捕（つかま）えて煮て食うという話である。しかしその当時は何という考（かんがえ）もなかったから別段恐しいとも思わなかった。'
            ],
            text1:'',
            isShow: false
        }
    },
    computed: {
        imageUrl() {
            return this.$store.state.url
        }
    },
    methods: {
         hoge() {
             this.$store.commit('setFaceVariation', 5)
             console.log(this.$store.state.url);
             /* this.imageUrl = require("@/assets/faceVariations/necchusyou_face_girl" + slug + ".png"); */
            /* const TextMessage = this.text[index].split('');
            this.text1 = TextMessage */
        }
    }
}

</script>

<style lang="scss">
#js-text-box {
    position:absolute;
    bottom:100px;
    left:50px;
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
        width:260px;
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

.text-box .name-box {
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
