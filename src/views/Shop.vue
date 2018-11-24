<template>
  <div class="container shop">
    <h1 class="mb-5">Shop</h1>
    <button
      v-for="item in items" @click="updateCart(item)"
      class="tile"
      :style="{ 'background-color': $store.getters.isItemInCart(item) ? '#e6e6e6' : 'white'}">
      <p>{{ item.name }}</p>
      <p>{{ item.value }}</p>
      <i class="fas fa-shopping-cart"></i>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Shop',
  data() {
    return {
      items: [
        {
          name: 'Toaster',
          value: '20',
        },
        {
          name: 'Iron',
          value: '30',
        },
        {
          name: 'Water',
          value: '30',
        },
        {
          name: 'Toaster',
          value: '20',
        },
        {
          name: 'Iron',
          value: '30',
        },
        {
          name: 'Water',
          value: '30',
        },
        {
          name: 'Toaster',
          value: '20',
        },
        {
          name: 'Iron',
          value: '30',
        },
        {
          name: 'Water',
          value: '30',
        },
        {
          name: 'Water',
          value: '30',
        },
      ],
    };
  },
  computed: {
    ...mapGetters,
  },
  methods: {
    ...mapActions,
    updateCart(item) {
      this.$store.dispatch('updateCart', item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  width: 180px;
  height: 100%;
  border: 1px;
  border-color: #42b983;
  border-style: solid;
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
.tile:hover {
  background-color: #e6e6e6;
}
.tile i {
  color: #42b983;
}
</style>
