<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    counterParagraph() {
     return this.$store.getters.counterString;
    },
    counterMultipliedByNumber() {
     return this.$store.getters.counterTimesNumber(5);
    },
    counterLength() {
      return this.$store.getters.countersDescription;
    }
  }
  // computed: {
  //   ...mapGetters(['counterString', 'counterTimesNumber', 'countersDescription']),
  //   counterParagraph() {
  //    return this.counterString;
  //   },
  //   counterMultipliedByNumber() {
  //    return this.counterTimesNumber(5);
  //   },
  //   counterLength() {
  //     return this.countersDescription;
  //   }
  // }
}
</script>

<template>
  <div>{{counterParagraph}}</div>
  <div>{{counterMultipliedByNumber}}</div>
  <div>{{counterLength}}</div>
</template>

<style lang="css" scoped>

</style>