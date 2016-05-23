<template>
    <div class="example">{{ msg }}</div>
    <app-a></app-a>
    <app-b></app-b>
</template>


<script>
import appA from './components/a.vue'
import appB from './components/b.vue'
export default {
  data () {
    return {
      msg: 'Hello from vue-loaderdddddddd!'
    }
  },
  components: {
    appA,
    appB
  }
}
</script>

<style lang="sass">
    .example{
        line-height: 30px;
        background-color: #ff0;
    }
</style>
