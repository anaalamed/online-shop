<template>
  <div class="box">
    <img class="logo" src="@/assets/logo.jpeg" />
    <h1 class="title">My online shop</h1>
    <Search />
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  components: {
    Search,
  },
};
</script>

<style scoped>
.box {
  background: var(--pink);
  /* padding: 1rem; */
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  margin: 0;
}

.logo {
  /* width: 100px; */
  height: 1rem;
}
</style>