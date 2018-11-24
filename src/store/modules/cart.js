export default {
  state: {
    items: [],
  },
  getters: {
    countItems(state) {
      return state.items.length;
    },
    totalValue(state) {
      return state.items.length;
    },
    isItemInCart(state) { return item => state.items.find(i => i === item); },
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    },
  },
  actions: {
    updateCart({ commit, getters }, item) {
      getters.isItemInCart(item) ? commit('removeItem', item) : commit('addItem', item);
    },
  },
};
