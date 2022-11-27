<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
   ...mapMutations(['increment', 'incrementByNumber', 'incrementByValue']),
   addOne(){
    this.increment();
   },
   addNumber() {
      this.incrementByNumber(5);
    },
    addValue() {
      this.incrementByValue({value:8});
    }
  }
  // methods: {
  //   addOne(){
  //     this.$store.commit('increment');
  //   },
  //   addNumber() {
  //     this.$store.commit('incrementByNumber', 5);
  //   },
  //   addValue() {
  //     this.$store.commit('incrementByValue', {value:8});
  //   }
  // }
}
</script>

<template>
  <button @click = "addOne">Add 1</button>
  <button @click = "addNumber">Add Number</button>
  <button @click = "addValue">Add Value</button>
</template>

<style lang="css" scoped>

</style>