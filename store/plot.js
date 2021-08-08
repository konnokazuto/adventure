export const state = () => ({
    plots: [],
    plotCount: 0,
    plotNumber: 0
})

export const mutations = {
    SET_PLOT (state, plots) {
        state.plots = plots
    },
    ADD_PLOT_COUNT (state, value) {
        state.plotCount++
    },
    RESET_PLOT_COUNT (state) {
        console.log('RESET_PLOT_COUNT')
        state.plotCount = 0
    },
    ADD_PLOT_NUMBER (state) {
        state.plotNumber++
    },
    RESET_PLOT_NUMBER (state) {
        state.plotNumber = 0 　
    },
}

export const actions = {

}