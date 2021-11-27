<template>
  <div class="home">
    <MyTust v-if="!AUTH"
      :user="user"/>
    <second-tust v-if="AUTH"/>
    <TaskTwoThree v-if="AUTH"/>
    <TodoList v-if="AUTH"/>
    <Task6 :companys="companys" :name_column="name_column" v-if="AUTH"/>
    <Task7 v-if="AUTH"/>
      <button class="waves-effect waves-light btn" v-if="AUTH" @click="logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTust from '@/components/MyTust.vue'
import SecondTust from '../components/SecondTust.vue'
import TaskTwoThree from '../components/Task2_3.vue'
import TodoList from '../components/TodoList.vue'
import Task6 from '../components/Task6.vue'
import Task7 from "../components/Task7.vue"

import { mapGetters } from "vuex";

export default {
  name: 'MyVue',
  components: {
    MyTust,
    SecondTust,
    TaskTwoThree,
    TodoList,
    Task6,
    Task7
  },
  computed:{
    ...mapGetters(["AUTH"]),
  },
  data:function(){
    return {
      user:{
        username: "",
        pass: ""
      },
      companys:[{ name: "ООО Дарград", inn: 200500452345 },
      { name: "ИП Кузнецов", inn: 200500452346 },
      { name: "ООО КубинКруиз", inn: 200500452365 },
      { name: "ООО МояОборона", inn: 200500452324 },],
      name_column: ["№", "Наименование компании", "ИНН"]
    }
  },

  methods:{
    logout: function () {
      this.$store.commit("SET_AUTH", false);
    },
  }
}
</script>
