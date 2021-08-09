export default function ({ store, redirect }) {
    store.commit("audio/setAudioElement", store.state.audio.hoge)
    store.dispatch("audio/login", require('@/assets/bgm/n94.mp3'))
  }