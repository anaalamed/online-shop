<template>
  <div class="home">
    <Topbar />
    <Categories />
    <Carousel />
    <Shop />
    <!-- <Form /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/Topbar.vue";
import Categories from "@/components/Categories.vue";
// import Hero from "@/components/Hero.vue";
import Carousel from "@/components/Carousel.vue";
import Shop from "@/components/Shop.vue";
// import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Categories,
    Carousel,
    Shop,
    // Form,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
