<template>
  <div class="home">
    <Topbar />
    <Menu />
    <!-- <Hero /> -->
    <hero-2 />
    <Shop />
    <!-- <Form /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/Topbar.vue";
import Menu from "@/components/Menu.vue";
// import Hero from "@/components/Hero.vue";
import Hero2 from "@/components/Hero2.vue";

import Shop from "@/components/Shop.vue";

// import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Menu,
    // Hero,
    Hero2,
    Shop,
    // Form,
  },
};
</script>
