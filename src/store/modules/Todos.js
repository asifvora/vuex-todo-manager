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
        const response = await request.get(`todos?_limit=${5}`);
        commit('setTodos', response);
        commit('loader', false);
    },
    async filterTodos({ commit }, limit) {
        commit('loader', true);
        const response = await request.get(`todos?_limit=${limit}`);
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
    },
    async updateTodo({ commit }, updateTodo) {
        commit('loader', true);
        const response = await request.put(`todos/${updateTodo.id}`, updateTodo);
        commit('updateTodo', response);
        commit('loader', false);
    }
};

const mutations = {
    loader: (state, isLoading) => state.isLoading = isLoading,
    setTodos: (state, todos) => state.todos = todos,
    addTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updateTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updateTodo.id);
        if (index !== -1) {
            state.todos[index] = updateTodo;
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}