export const state = () => ({
    counter: 0,
    url: require('@/assets/faceVariations/necchusyou_face_girl1.png')
  })

  export const getters = {
    url(state) {
      return require('@/assets/faceVariations/necchusyou_face_girl' + state.url + '.png')
    }
  };

  export const mutations = {
    setFaceVariation (state, n) {
      state.url = require('@/assets/faceVariations/necchusyou_face_girl' + n + '.png')
    }
  }