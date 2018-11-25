export default {
  state: {
    items: [],
  },
  getters: {
    countItems(state) {
      return state.items.length;
    },
    totalValue(state) {
      if (!state.items.length) return 0;
      return state.items.reduce((sum, item) => sum + item.value, 0);
    },
    isItemInCart(state) { return item => state.items.some(i => i.id === item.id); },
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, item) {
      state.items.splice(state.items.findIndex(i => i.id === item.id), 1);
    },
  },
  actions: {
    updateCart({ commit, getters }, item) {
      getters.isItemInCart(item) ? commit('removeItem', item) : commit('addItem', item);
    },
  },
};
