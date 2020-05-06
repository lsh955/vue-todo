<template>
  <div id="root">
       <p>{{ originalPrice }}</p>
       <p>{{ doublePrice }}</p>
       <p>{{ trriplePrice }}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
     computed: {
          // mapGetters 헬퍼 사용으로 심플하게 구현

          // originalPrice() {
               //      return this.$store.getters.originalPrice;
          // },
          // doublePrice() {
               //      return this.$store.getters.doublePrice
          // },
          // triplePrice() {
               //      return this.$store.getters.trriplePrice
          // },

          ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
     }
}
</script>

<style>

</style>