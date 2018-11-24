<template>
  <div id="app">
    <div class="navbar">
      <ul>
        <li>
          <router-link :to="{ name: 'shop' }">Shop</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'qrCode' }">QR code</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin-left: 20px;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
p {
  font-size: 14px;
}
</style>
