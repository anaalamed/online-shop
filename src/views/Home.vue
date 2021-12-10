<template>
  <div class="home">
    <Topbar />
    <Categories />
    <Carousel />
    <Shop />
    <FooterForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from "@/components/Topbar.vue";
import Categories from "@/components/Categories.vue";
import Carousel from "@/components/Carousel.vue";
import Shop from "@/components/Shop.vue";
import FooterForm from "@/components/FooterForm.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Categories,
    Carousel,
    Shop,
    FooterForm,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
