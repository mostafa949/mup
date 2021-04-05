<template>
  <div id="app">
    <div class="row">
      <div class="col-md-11">
        <router-view />
      </div>
      <div class="col-md-1 upper-sidebar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1800px;
}
</style>
