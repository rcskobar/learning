<template>
<div>
  <div class="company">
        <h3>Taks 2</h3>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование компании</th>
              <th>ИНН</th>
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
      <div class="calc">
        <h3>Task 3</h3>
        <label> Градусы Фаренгейта </label>
        <input v-model="rat_far" />
        <br />
        <button @click="convert">Convert</button>
        <br />

        <label> Градусы Цельсия </label>
        <input v-model="rat_cel" />
      </div>
      <div class="calc">
        <h3>Task 5</h3>
        <label> Градусы Фаренгейта </label>
        <input v-model="rat_far" />
        <br />

        <label> Градусы Цельсия </label>
        <p>{{rat_cel_auto}}</p>
      </div>
    </div>
</template>
<script>

export default {
  name: "TaskTwoThree",
  data: function () {
    return {
      companys: [],
      rat_far: 0,
      rat_cel: 0,
    };
  },
  created: function () {
    this.companys = [
      { name: "ООО Дарград", inn: 200500452345 },
      { name: "ИП Кузнецов", inn: 200500452346 },
      { name: "ООО КубинКруиз", inn: 200500452365 },
      { name: "ООО МояОборона", inn: 200500452324 },
    ];
  },
  methods: {
    convert: function () {
      this.rat_cel = ((this.rat_far - 32) / 1.8).toFixed(1);
    },
  },
  computed:{
    rat_cel_auto: function(){
      return ((this.rat_far - 32) / 1.8).toFixed(1);
    }
  }
  }
</script>