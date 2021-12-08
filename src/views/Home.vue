<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Menu />
    <Shop />
  </div>
</template>

<script>
// @ is an alias to /src
import Shop from "@/components/Shop.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Shop,
    Menu,
  },
};
</script>
