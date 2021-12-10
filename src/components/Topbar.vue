<template>
  <div class="box">
    <img class="logo" src="@/assets/logo.png" />
    <h1 class="title">My online shop</h1>
    <Search />

    <i class="fas fa-bars" @click="toggleMenu"></i>
    <mobile-menu v-if="isMenuOpen" @close="toggleMenu"></mobile-menu>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import MobileMenu from "../components/MobileMenu.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: {
    Search,
    MobileMenu,
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.box {
  background: var(--pink);
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 5rem;
}

.title {
  margin: 0;
}

.logo {
  /* width: 100px; */
  height: 80px;
}

.fa-bars {
  display: none;
}

@media (max-width: 812px) {
  .box {
    padding: 0 1rem 0 1rem;
  }

  .title {
    display: none;
  }

  .fa-bars {
    display: inline;
    color: var(--green);
    font-size: 1.5rem;
  }
}
</style>