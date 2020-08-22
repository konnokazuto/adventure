export const state = () => ({
    background: ''
})

export const mutations = {
    SET_BACKGROUND (state, IMG) {
        state.background  = IMG
    }
}