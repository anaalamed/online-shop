<template>
  <div class="home">
    <Topbar />
    <Categories />
    <Carousel />
    <Shop />
  </div>
</template>

<script>
import Topbar from "@/components/topBar/Topbar.vue";
import Categories from "@/components/homePage/Categories.vue";
import Carousel from "@/components/homePage/Carousel.vue";
import Shop from "@/components/homePage/Shop.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Categories,
    Carousel,
    Shop,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas:
    "topbar"
    "categories"
    "carousel"
    "shop";
}
</style>
