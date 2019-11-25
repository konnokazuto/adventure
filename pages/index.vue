<template>
  <div id="gameScreen">
      <textBox />
  </div>
</template>

<script>
import Logo from '~/components/atoms/atomText'
import textBox from '~/components/organisms/textBox'

export default {
  components: {
    textBox
  }
}
</script>

<style lang="scss" scoped>
#gameScreen {
  width: 100%;
  height: 1000px;
}
</style>
