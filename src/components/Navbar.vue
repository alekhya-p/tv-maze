<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="nav-link" :to="{name: 'Home'}">
                MOVIECOOL
      </router-link>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="query">
      <button class="btn btn-outline-success" type="submit" @click="goToTvSearch">
      Search
      </button>
    </form>
  </div>
</nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    goToTvSearch() {
      this.$router.push({
        name: "Search",
        params: {
           query: this.query,
        },
      });
    },
  },
};
</script>
<style scoped>
.nav-link {
  color: rgb(153, 214, 129);
}
.navbar-icon{
  color:black;
}
.btn{
  color: rgb(99, 192, 127);
}
</style>