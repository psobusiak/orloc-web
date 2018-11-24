<template>
  <div class="shop">
    <h1>Shop</h1>
    <div v-for="item in items">
      {{ item.name }}
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      items: [
        {
          name: "Toaster",
          value: "20",
        },
        {
          name: "Iron",
          value: "30",
        },
        {
          name: "Water",
          value: "30",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
