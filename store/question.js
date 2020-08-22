export const state = () => ({
    question: false,
    choices: []
})

export const mutations = {
    SHOW_QUESTION (state, question) {
        state.question = !state.question
    },
    SET_QUESTION  (state, choices) {
        console.log(choices)
        state.choices = choices
    }
}