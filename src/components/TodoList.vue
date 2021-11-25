<template>
  <div class="container">
    <table>
      <tr v-for="(todo, key) in todos" :key="key">
        <td>
          <label>
          <input
            type="checkbox"
            @change="todo.done = !todo.done"
            :checked="todo.done"
          />

          <del v-if="todo.done">
            {{ todo.text }}
          </del>
          <span v-else>
            {{ todo.text }}
          </span>
          </label>
          </td>
          <td>
        <button @click="delete_task(key)" class="waves-effect waves-light btn">Delete task</button>
        </td>
      </tr>
    </table>
    
    <div class="create_task">
      <h4>create task</h4>
      <label> Name Task
      <input v-model="name_task" />
      </label>
      <label>
      <input v-model="status" type="checkbox" />
      <span> Done </span>
      </label>
      <br>
      <button @click="create_task"  class="waves-effect waves-light btn">Create task</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data: function () {
    return {
      todos: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true },
      ],
      name_task: "",
      status: false,
    };
  },
  methods: {
    create_task: function () {
      this.todos.push({ text: this.name_task, done: this.status });
    },
    delete_task: function(key){
      this.todos.splice(key, 1)
    }
  },
};
</script>
