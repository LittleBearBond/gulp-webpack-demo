
<style lang="sass" scoped>
    .container{
        height:100px;
    }
</style>

<template>
  <div class="container alert alert-danger">
      <h2 class="red">{{msg}} from A</h2>
  </div>
</template>

<script>
    import { getMessage } from '../services/message'

    export default {
      data () {
        return {
          msg: getMessage()
      }
  }
}
</script>
