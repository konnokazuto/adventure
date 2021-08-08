<template>
    <div>
        <span class="hoge" :style="hoge" v-for="item in text1" key="item">{{ item }}</span>
    </div>
</template>
<script>
export default {
    props: {
        text1: {
            type: Array
        }
    },
    data() {
        return {
            transitonDelay: '1s',
        }
    },
    computed: {
    }
}
</script>
<style lang="scss" scoped>
.hoge {
    transition:'opacity 0.09s linear 4s',
}
</style>