<script>
  import { mapState } from 'vuex';
  
  export default {
  computed: { 
    ...mapState({
      counter: state => state.counter,
    }),
  },
}
</script>

<template>
  <h3>{{counter}}</h3>
</template>