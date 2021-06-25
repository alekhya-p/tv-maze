<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <div v-if="loading" class="text-center">
        <div class="spinner-border"></div>
        <h3 class="text-dark pt-4">Loading</h3>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
  components: {
    Navbar,
  },
  data() {
    return{
      loading: true,
    }
  },
  async mounted() {
    await new Promise((r) => setTimeout(r, 2000));
    this.loading = false;
  },
};
</script>
<style>
#app {
  text-align: center;
  background-color: rgb(153, 214, 129);
  padding-bottom: 150px;
}
</style>
