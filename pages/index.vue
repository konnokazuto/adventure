<template>
  <div id="gameScreen">
      <hoge />
  </div>
</template>

<script>
import Logo from '~/components/atoms/atomLogo'
import hoge from '~/components/organisms/textBox'

export default {
  components: {
    Logo,
    hoge

  }
}
</script>

<style lang="scss" scoped>
#gameScreen {
  width: 100%;
  height: 1000px;
}
</style>
