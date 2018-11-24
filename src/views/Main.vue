<template>
  <div class="main">
    <h1>
      VIP
      <h3 style="margin: 30px 0">WELCOME TO ORLOC LOYALITY PROGRAM</h3>
      VIP
    </h1>
    <qrcode :value="qrValue" :options="{ width: 200 }" style="margin-bottom: -100px"></qrcode>
    <img src="https://cdn.lombard.com.au/www/746/files/911024.jpg" style="display: block; margin: auto; width: 400px"/>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      qrValue: 'Witam serdecznie',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
