import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    counterString(state) {
     return "The counter is " + state.counter.toString();
    },
    counterTimesNumber: (state)=>(number) => {
      return `The counter multiplied by ${number} is ${state.counter*number}`;
    },
    countersDescription(state, getters) {
      return getters.counterTimesNumber.length;
    }
  },
  mutations: {
    increment(state) {
      // mutate state
      state.counter++;
    },
    incrementByNumber (state, number) {
      // mutate state
      state.counter+=number;
    },
    incrementByValue (state, object) {
      // mutate state
      state.counter+=object.value;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
