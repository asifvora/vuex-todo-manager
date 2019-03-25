import { request } from '../../utils/HttpRequests';

const state = {
    todos: [],
    isLoading: false
};

const getters = {
    allTodos: (state) => state.todos,
    isLoading: (state) => state.isLoading
};

const actions = {
    async fetchTodos({ commit }) {
        commit('loader', true);
        const response = await request.get(`todos?_limit=${10}`);
        commit('setTodos', response);
        commit('loader', false);
    },
    async addTodo({ commit }, todo) {
        commit('loader', true);
        const response = await request.post(`todos`, todo);
        commit('addTodo', response);
        commit('loader', false);
    },
    async deleteTodo({ commit }, id) {
        commit('loader', true);
        await request.delete(`todos/${id}`);
        commit('deleteTodo', id);
        commit('loader', false);
    }
};

const mutations = {
    loader: (state, isLoading) => state.isLoading = isLoading,
    setTodos: (state, todos) => state.todos = todos,
    addTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
}