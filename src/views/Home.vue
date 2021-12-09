<template>
  <div class="home">
    <Topbar />
    <Menu />
    <Shop />
    <!-- <Form /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/Topbar.vue";
import Menu from "@/components/Menu.vue";
import Shop from "@/components/Shop.vue";

// import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Menu,
    Shop,
    // Form,
  },
};
</script>
