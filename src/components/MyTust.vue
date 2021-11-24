<template>
  <div>
    <div v-if="!AUTH">
      <h3>login</h3>
      <br />
      <form>
        <label>login</label>
        <input v-model="username" />
        <br />
        <label>pass</label>
        <input v-model="pass" />
        <br />
        <button @click="authorization">login</button>
        <br />
      </form>
    </div>
    <div v-else>
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
              <td>{{ key }}</td>
              <td>{{ company.name }}</td>
              <td>{{ company.inn }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="calc">
        <h3>task 3</h3>
        <label> Градусы Фаренгейта </label>
        <input v-model="rat_far" />
        <br />
        <button @click="convert">Convert</button>
        <br />

        <label> Градусы Цельсия </label>
        <input v-model="rat_cel" />
      </div>
      <button @click="logout">logout</button>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "MyTust",
  data: function () {
    return {
      username: "",
      pass: "",
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

    logout: function () {
      this.$store.commit("SET_AUTH", false);
    },

    authorization: function () {
      if (this.username !== "" && this.pass !== "") {
        this.$store.commit("SET_AUTH", true);
        alert(`Выполнен успешный вход в систему ${this.username}!`);
      } else {
        alert("неверно указан логин или пароль");
      }
    },
    status_auth: () => {
      return this.$store.getters.AUTH;
    },
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },
};
</script>
<style>
.company {
  margin: 40px;
}
.calc {
  margin: 40px;
}
</style>
