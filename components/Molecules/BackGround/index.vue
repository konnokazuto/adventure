<template>
    <div class="backGround">
        <div class="backGround__backLayer"></div>
        <img :src="background" alt="背景画像" class="backGround__image">
    </div>
</template>
<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            background: require('@/assets/backgroundImage/upstairs.jpg')
        }
    }
}
</script>
<style lang="scss" scoped>
.backGround {
    &__backLayer {
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.3);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index:9
    }
    &__image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index:8;
        object-fit: cover;
    }
}
</style>