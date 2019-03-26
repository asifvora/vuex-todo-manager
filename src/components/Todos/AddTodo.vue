<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'hasError': $v.form.title.$error }"
          type="text"
          v-model="form.title"
          placeholder="Add Todo..."
        >
        <input type="submit" value="Submit" class="btn" :disabled="$v.form.$error">
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      form: {
        title: null
      }
    };
  },

  validations: {
    form: {
      title: { required }
    }
  },

  methods: {
    ...mapActions("Todos", ["addTodo"]),

    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      const { title } = this.form;
      const newTodo = { title: title, completed: false };
      this.addTodo(newTodo);
      this.resetForm();
    },

    resetForm() {
      this.form.title = null;
      this.$v.form.$reset();
    }
  },

  computed: mapState("Todos", ["isLoading"])
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
.hasError {
  border: 1px solid red !important;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>

