<template>
  <div id="app">
    <Header></Header>
    <div class="container mb-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  components: {
    Header
  }
};
</script>


<style>
</style>
