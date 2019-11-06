<template>
  <div class="home">
    <Intro msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'home',
  components: {
    Intro
  }
}
</script>
