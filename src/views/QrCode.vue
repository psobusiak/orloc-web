<template>
  <div class="main container">
    <div class="row mt-4">
      <div class="summary col-3" style="margin-top: 8%">
        <h2>Summary:</h2>
        <b>Items in cart:</b> {{ $store.getters.countItems }}
        <br>
        <b>Total value:</b> {{ $store.getters.totalValue }}
        <hr/>
        <div v-for="item in items" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.value }}</span>
        </div>
      </div>
      <div class="col-6">
        <img src="http://i0.wp.com/blogpublika.com/wp-content/uploads/2016/10/Orlen_logo.svg_.png?fit=1280%2C929" style="display: block; margin: auto; width: 200px"/>
        <qrcode :value="qrValue" :options="{ width: 250 }"></qrcode>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  computed: {
    ...mapGetters,
    items() {
      return this.$store.state.cart.items;
    },
    qrValue() {
      const value = [];
      this.$store.state.cart.items.forEach(item => value.push(item.id));
      return value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
