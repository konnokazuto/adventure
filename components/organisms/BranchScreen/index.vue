<template>
    <div class="branchScreen">
        <h2 class="branchScreen__question">{{ question }}</h2>
        <ul class="branchScreen__branchs">
           <li v-for="(branch, index) in branchs" :key="index" class="branchScreen__branch">
                {{branch.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            question: 'あなたはどの選択肢を選ぶ?',
            branchs: [
                {
                    name: '選択肢A'
                },
                {
                    name: '選択肢B'
                },
                {
                    name: '選択肢C'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.branchScreen {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    background: #000;
    padding-top:30px;
    &__question {
        color: #fff;
        font-size: 35px;
        text-align: center;
        margin-bottom: 40px;
    }
    &__branchs {
        width: 800px;
        margin: 0 auto;
    }
    &__branch {
        display: block;
        text-decoration: none;
        border-style: solid;
        border-width: 5px;
        text-align: center;
        font-size: 30px;
        border-color: #04b6b8;
        border-radius: 10px;
        background-color: rgba(241,255,255,.4);
        width: 100%;
        height: 100px;
        margin-bottom: 18px;
        box-sizing: border-box;
        line-height: 90px;
        color: #000;
        transition: border-color .35s,background-color .35s;
    }
    &__branch:hover {
        border-color: #ea1e63;
        background: #fff;
        color: #000;
    }
}

</style>