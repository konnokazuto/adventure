export const state = () => ({
    deviceType: 'sp',
    counter: -1,
    url: require('@/assets/faceVariations/necchusyou_face_girl' + 1 + '.png')
  })

  export const getters = {
    url(state) {
      return require('@/assets/faceVariations/necchusyou_face_girl' + state.url + '.png')
    }
  };

  export const mutations = {
    SET_DEVICE_TYPE (state) {
        const type = this.$ua.isFromPc() ? 'pc' : 'sp'
        state.deviceType = type
    },
    setFaceVariation (state, n) {
      state.url = require('@/assets/faceVariations/necchusyou_face_girl' + n + '.png')
    },

    setCounter (state) {
        state.counter += 1
    }
  }