<template>
<div>
  <div class="company">
      <h3>Taks 6</h3>
        <table>
          <thead>
            <tr>
              <th v-for="(val, key) in name_column"
              :key="key">{{val}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, key) in companys" :key="key">
              <td>{{ key+1 }}</td>
              <td>{{ company.name }}</td>
              <td>{{ company.inn }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>

export default {
  name: "Task6",
  data: function () {
    return {
    };
  },
  props:["companys", "name_column"],
  created: function () {
  },
  methods: {
  },
  computed:{
  }
  }
</script>