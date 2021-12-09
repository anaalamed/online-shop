<template>
  <div class="home">
    <Menu />
    <Shop />
    <!-- <Form /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Shop from "@/components/Shop.vue";
import Menu from "@/components/Menu.vue";
// import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Shop,
    Menu,
    // Form,
  },
};
</script>
