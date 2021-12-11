<template>
  <div class="box">
    <img class="logo" src="@/assets/logo.png" @click="handleClick" />
    <h1 v-if="isHomePage" class="title homeTitle">קונימבו שופ</h1>
    <h1 v-else class="title">קונימבו שופ</h1>

    <Search v-if="isHomePage" />

    <i v-if="isHomePage" class="fas fa-bars" @click="toggleMenu"></i>
    <MobileMenu v-if="isMenuOpen" @close="toggleMenu"></MobileMenu>
  </div>
</template>

<script>
import Search from "./Search.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
      isHomePage: false,
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
      console.log(!window.location.href.includes("item"));
    },
    handleClick() {
      this.$router.push("/");
    },
  },
  mounted() {
    if (!window.location.href.includes("item")) this.isHomePage = true;
  },
};
</script>

<style scoped>
.box {
  grid-area: topbar;
  background: var(--secondary);
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
  height: 80px;
  cursor: pointer;
}

.fa-bars {
  display: none;
}

@media (max-width: 812px) {
  .box {
    padding: 0 1rem 0 1rem;
  }

  .homeTitle {
    display: none;
  }

  .fa-bars {
    display: inline;
    color: var(--main);
    font-size: 1.5rem;
  }
}
</style>