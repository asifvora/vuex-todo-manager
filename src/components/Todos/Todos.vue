<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="onDelete(todo.id)"></i>
      </div>
    </div>
    <FullPageLoader v-bind:isShow="isLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FullPageLoader from "../FullPageLoader/FullPageLoader.vue";

export default {
  name: "Todos",
  components: {
    FullPageLoader
  },

  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
    
    onDelete(id) {
      this.deleteTodo(id);
    }
  },

  computed: mapGetters(["allTodos", "isLoading"]),

  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
