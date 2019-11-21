<template>
    <div class="text-box pink" id="js-text-box">
        <div class="name-box" id="js-name-box">ありさん</div>
        <div class="text-box-main" id="js-text-box-main">
            <div id="js-text-box-main-inner" class="text-box-main-inner">
                <div>
                    <span v-for="(item, index) in text1"
                    key="item"
                    :style="{animationDelay: index*40+'ms'}"
                    class="hoge">{{ item }}</span>
                </div>
            </div>
            <button @click="hoge" class="next-btn blue">Next</button>
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
            text: '吾輩は猫である。名前はまだない。どこで生れたか頓（とん）と見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
            text1:'',
            isShow: false
        }
    },
    computed: {
        /* transitionRate() {
           return {
                opacity:'1',
                transitionProperty: 'all',
                transitonDuraiton: '0.09s',
                transitionTimingFunction: 'linear',
                transitionDelay: '2s'
           }
        } */
    },
    methods: {
        hoge() {
            const TextMessage = this.text.split('');
            this.text1 = TextMessage
        }
    }
}

</script>

<style lang="scss">
@keyframes show{
   0% {
    opacity: 0;
  }
}
.hoge {
    animation:show 0.09s linear 0s backwards;
}
.hoge.is-show {
    opacity:1;
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

.pink .text-box .next-btn {
    background-color: #ea1e63;
}
.text-box .next-btn {
    color: #fff;
    border-style: solid;
    border-width: 6px;
    border-color: #fff;
    background-color: #04b6b8;
    border-radius: 30px;
    position: absolute;
    width: 178px;
    height: 46px;
    line-height: 46px;
    display: block;
    right: 20px;
    text-align: center;
    text-decoration: none;
    transition: all .35s;
}
</style>
