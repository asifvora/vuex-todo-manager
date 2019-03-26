export default {
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
}