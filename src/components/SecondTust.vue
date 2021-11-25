<template>
  <div>
    <div style="margin: 20px">
      <label>
        A
      </label>
      <input v-model="a">

      <label>
        B
      </label>
      <input v-model="b">
      <div>result: {{result}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SecondTust",
  data: function(){
    return{
      a: 0,
      b: 0
    }
  },
  computed:{
    result: function(){
      return this.a * this.b
    }
  }
}
</script>