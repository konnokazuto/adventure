export default function ({ store, redirect }) {
    console.log('レンダリング')
    store.commit("audio/setAudioElement", store.state.audio.hoge)
    console.log(store.state.audio.audioElement)
    /* store.commit("audio/setAudioElementSrc", require('@/assets/bgm/n94.mp3')) */
    store.dispatch("audio/login", require('@/assets/bgm/n94.mp3'))
    /* store.commit("audio/startAudioElement") */
  }