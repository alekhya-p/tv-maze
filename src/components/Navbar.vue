<template>
  <div>
    <nav class="navbar navbar-dark bg-info">
    <div class="container-fluid">
      <router-link class="nav-link" :to="{name: 'Home'}">
                <b-icon icon="camera-reels" class="navbar-icon"></b-icon>
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
.navbar-icon{
  color:black;
}
.btn{
  color: rgb(16, 38, 236);
}
</style>