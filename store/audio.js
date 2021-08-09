export const state = () => ({
  hoge: new Audio(),
  latestRadioNumber: 0,
  radioTitle: null,
  radioDate: null,
  radioMembers: null,
  audioElement: null,
  audioVolume: 0.5,
  audioUrl: null,
  currentTime: 0,
  minCurrentTime: 0,
  pausedTime: 0,
  durationTime: 0,
  incrementTime: 0,
  progressBar: 100,
  playRate: 1.0
})

export const mutations = {
  resetIncrementTime(state, amount) {
    state.incrementTime = amount
  },
  resetProgressBar(state, amount) {
    state.progressBar = amount
  },
  resetMinCurrentTime(state, time) {
    state.minCurrentTime = time
  },
  setLatestRadioNumber(state, number) {
    state.latestRadioNumber = number
  },
  setRadioTitle(state, payload) {
    state.radioTitle = payload
  },
  setRadioDate(state, payload) {
    state.radioDate = payload
  },
  setRadioMembers(state, payload) {
    state.radioMembers = payload
  },
  setAudioElement(state, elem) {
    state.audioElement = elem
  },
  setAudioElementSrc(state, elem) {
    state.audioElement.src = elem
  },
  startAudioElement(state, elem) {
    state.audioElement.play()
  },
  setAudioVolume(state, payload) {
    state.audioVolume = payload
  },
  setAudioUrl(state, payload) {
    state.audioUrl = payload
  },
  setCurrentTime(state, time) {
    state.currentTime = time
  },
  setMinCurrentTime(state, time) {
    state.minCurrentTime = time
  },
  setPausedTime(state, time) {
    state.pausedTime = time
  },
  setDurationTime(state, time) {
    state.durationTime = time
  },
  setIncrementTime(state, amount) {
    state.incrementTime += amount
  },
  setProgressBar(state, amount) {
    state.progressBar -= amount
  },
  setPlayRate(state, payload) {
    state.playRate = payload
  }
}

export const actions = {
  login ({commit}, payload) {
    commit('setAudioElementSrc' ,payload)
    commit("startAudioElement")
  }

}