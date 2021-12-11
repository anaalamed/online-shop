<template>
  <div id="shop">
    <h1 class="title">{{ category }}</h1>
    <div class="grid-items">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./ItemContainer.vue";

export default {
  components: {
    Item,
  },
  computed: {
    items() {
      if (this.$store.state.currentCategory === "כל המוצרים")
        return this.$store.state.filteredItems;
      else
        return this.$store.state.filteredItems.filter(
          (item) =>
            item.store_category_title === this.$store.state.currentCategory
        );
    },
    category() {
      return this.$store.state.currentCategory;
    },
  },

  mounted() {
    this.$store.dispatch("fetchItems");
  },
};
</script>

<style scoped>
#shop {
  grid-area: shop;
}
.title {
  margin: 0;
  margin-top: 6rem;
  font-size: 2.5rem;
}
.grid-items {
  padding: 1rem 10rem 4rem 10rem;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

@media (max-width: 812px) {
  .grid-items {
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .title {
    margin-top: 2rem;
    font-size: 2rem;
  }
}
</style>