<template>
  <div class="container">
    <div v-if="!AUTH">
      <h3>login</h3>
      <br />
      <form>
        <label>login</label>
        <input v-model="user.username" />
        <br />
        <label>pass</label>
        <input v-model="user.pass" />
        <br />
        <button @click="authorization" class="waves-effect waves-light btn">login</button>
        <br />
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "MyTust",
  props: ['user'],
  data: function () {
    return {
    };
  },
  methods: {
    authorization: function () {
      if (this.user.username !== "" && this.user.pass !== "") {
        this.$store.commit("SET_AUTH", true);
        alert(`Выполнен успешный вход в систему ${this.user.username}!`);
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
