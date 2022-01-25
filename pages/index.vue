<template>
  <div :class="injectClass" class="gameScreen">
    <div class="gameScreen__contents">
      <back-ground />
      <Character class="gameScreen__character" />
      <message-window
        @hoge="hoge"
        :plot="plots"
        class="gameScreen__messageWindow"
      ></message-window>
      <question v-if="question"></question>
      <game-over></game-over>
      <bgm></bgm>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MessageWindow from "@/components/Organisms/MessageWindow";
import Character from "@/components/Organisms/Character";
import Question from "@/components/Organisms/Question";
import GameOver from "@/components/Organisms/GameOver";
import BackGround from "@/components/Molecules/BackGround";
import bgm from "@/components/Molecules/bgm";

export default {
  components: {
    MessageWindow,
    Character,
    BackGround,
    GameOver,
    Question,
    bgm
  },
  computed: {
    ...mapState({
      plots: state => state.plot.plots,
      question: state => state.question.question
    })
  },
  async fetch({ store, $axios }) {
    const plots = await $axios.$get(
      process.env.baseURL + "/plot/chapter2.json"
    );
    store.commit("plot/SET_PLOT", plots);
  }
};
</script>

<style lang="scss" scoped>
.pc.gameScreen {
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
}
.pc .gameScreen {
  &__contents {
    width: 1100px;
    height: 720px;
    margin: 0 auto;
    position: relative;
  }
  &__character {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &__messageWindow {
    position: absolute;
    bottom: 100px;
    width: 100%;
    z-index: 10;
  }
  &__timer {
    position: absolute;
    top: 20px;
    left: 200px;
    z-index: 1000;
    color: #fff;
    font-size: 38px;
    text-align: center;
  }
}
.sp.gameScreen {
  width: 100%;
  height: 100vh;
  background: #000;
  position: relative;
}
.sp .gameScreen {
  &__character {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
  }
  &__messageWindow {
    position: absolute;
    bottom: 40px;
    width: 100%;
    z-index: 10;
  }
}
</style>
