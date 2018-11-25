<template>
  <div class="container shop">
    <h1 class="mb-5">Shop</h1>
    <button
      v-for="(item, index) in items" @click="updateCart(item)"
      :key="index"
      class="tile"
      :style="{ 'background-color': $store.getters.isItemInCart(item) ? '#e6e6e6' : 'white'}">
      <p>{{ item.name }}</p>
      <p>{{ item.value }}</p>
      <i class="fas fa-shopping-cart"></i>
    </button>
    <div class="text-center mt-4">
      <router-link :to="{ name: 'qrCode' }" class="mt-3" style="border: solid 1px;padding: 10px 20px">Checkout</router-link>
    </div>
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
          id: 1,
          name: 'Toaster',
          value: 20,
        },
        {
          id: 2,
          name: 'Iron',
          value: 30,
        },
        {
          id: 3,
          name: 'Water',
          value: 30,
        },
        {
          id: 4,
          name: 'Toaster',
          value: 20,
        },
        {
          id: 5,
          name: 'Iron',
          value: 30,
        },
        {
          id: 6,
          name: 'Water',
          value: 30,
        },
        {
          id: 7,
          name: 'Toaster',
          value: 20,
        },
        {
          id: 8,
          name: 'Iron',
          value: 30,
        },
        {
          id: 9,
          name: 'Water',
          value: 30,
        },
        {
          id: 10,
          name: 'Water',
          value: 30,
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
  border-color: #e6001f;
  border-style: solid;
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
.tile:hover {
  background-color: #e6e6e6;
}
.tile i {
  color: #e6001f;
}
</style>
