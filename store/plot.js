export const state = () => ({
    plots: []
})

export const mutations = {
    SET_PLOT  (state, plots) {
        state.plots = plots
    }
}