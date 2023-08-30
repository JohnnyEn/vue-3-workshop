import { defineStore } from 'pinia';

export const useStore = defineStore('TestInputStore', {
  state: () => ({
    inputState: ''
  }),
  actions: {
    resetInputState() {
      this.inputState = null;
    }
  },
  getters: {

  }
});
