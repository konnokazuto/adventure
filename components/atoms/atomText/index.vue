<template>
    <div>
        <span :class="hoge" v-for="item in text1" key="item">{{ item }}</span>
    </div>
</template>
<script>
export default {
    props: {
        text1: {
            type: Array
        }
    },
    computed: {
        hoge() {
            color:'red'
        }
    }
}
</script>