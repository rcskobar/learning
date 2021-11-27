<template>
  <div class="task7">
    <h4>Task7</h4>
      <div v-if="data">
        <table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>status</th>
          </tr>
          <tr>
            <td>
              {{data.id}}
            </td>
            <td>
              {{data.title}}
            </td>
            <td>
              {{data.completed}}
            </td>
          </tr>
        </table>
      </div>
      <label>
        Укажите номер задачи
        <input v-model.number="number_job"> 
      </label>
      <button class="waves-effect waves-light btn" @click="load_target">Load data</button>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "Task7",
  data:function(){
    return{
      data: null,
      number_job: null,
    }
  },
  methods:{
    load_target: function(){
      let vm = this;
      if (vm.number_job === null || vm.number_job > 200 || vm.number_job < 1 ){
        alert("Укажите номер задачи от 1 до 200")
        return null
      }
      axios.get(`https://jsonplaceholder.typicode.com/todos/${vm.number_job}`)
      .then(function(response){
        vm.data = response.data
      })
      .catch(function(error){
        console.log(error.data)
      })
    }
  }
}
</script>
<style>
.task7{
  margin:50px
}
</style>