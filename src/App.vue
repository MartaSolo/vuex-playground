<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import ModifiedCounter from './components/ModifiedCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    ModifiedCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
};
</script>

<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <ChangeCounter />
    <ModifiedCounter />
  </BaseContainer>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>