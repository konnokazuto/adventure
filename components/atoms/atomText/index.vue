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
        hoge() {
            return {
                /* opacity:'1',
                transitionProperty: 'all',
                transitonDuraiton: '0.09s',
                transitionTimingFunction: 'linear',
                transitionDelay: '2s' */
                
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.hoge {
    transition:'opacity 0.09s linear 4s',
}
</style>