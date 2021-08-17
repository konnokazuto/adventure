export default function ({ store, redirect }) {
    store.commit("audio/setAudioElement", store.state.audio.hoge)
  }