<template>
  <div class="home">
    <MyTust></MyTust>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTust from '@/components/MyTust.vue'

export default {
  name: 'MyVue',
  components: {
    MyTust
  }
}
</script>
