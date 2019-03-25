import { request } from '../../utils/HttpRequests';

const state = {
    todos: [],
    isLoading: true
};

const getters = {
    allTodos: (state) => state.todos,
    isLoading: (state) => state.isLoading
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await request.get(`todos?_limit=${10}`);
        commit('setTodos', response, false)
    }
};

const mutations = {
    setTodos: (state, todos, isLoading) => (state.todos = todos, state.isLoading = isLoading)
};

export default {
    state,
    getters,
    actions,
    mutations
}