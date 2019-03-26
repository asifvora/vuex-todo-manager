import { request } from '../../../utils/HttpRequests';

export const fetchTodos = async ({ commit }) => {
    commit('loader', true);
    const response = await request.get(`todos?_limit=${5}`);
    commit('setTodos', response);
    commit('loader', false);
}

export const filterTodos = async ({ commit }, limit) => {
    commit('loader', true);
    const response = await request.get(`todos?_limit=${limit}`);
    commit('setTodos', response);
    commit('loader', false);
}

export const addTodo = async ({ commit }, todo) => {
    commit('loader', true);
    const response = await request.post(`todos`, todo);
    commit('addTodo', response);
    commit('loader', false);
}

export const deleteTodo = async ({ commit }, id) => {
    commit('loader', true);
    await request.delete(`todos/${id}`);
    commit('deleteTodo', id);
    commit('loader', false);
}

export const updateTodo = async ({ commit }, updateTodo) => {
    commit('loader', true);
    const response = await request.put(`todos/${updateTodo.id}`, updateTodo);
    commit('updateTodo', response);
    commit('loader', false);
}