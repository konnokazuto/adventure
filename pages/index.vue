<template>
  <div id="gameScreen">
      <text-box></text-box>
  </div>
</template>

<script>
import BranchScreen from '~/components/Organisms/BranchScreen'
import TextBox from '~/components/Organisms/TextBox'

export default {
  components: {
    BranchScreen,
    TextBox
  }
}
</script>

<style lang="scss" scoped>
#gameScreen {
  width: 100%;
  height: 1000px;
  background: #000;
}
</style>
