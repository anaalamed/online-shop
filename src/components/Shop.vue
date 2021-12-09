<template>
  <div>
    <div class="grid-items">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  computed: {
    items() {
      if (this.$store.state.currentCategory === "הכל")
        return this.$store.state.items;
      else
        return this.$store.state.items.filter(
          (item) =>
            item.store_category_title === this.$store.state.currentCategory
        );
    },
  },

  mounted() {
    this.$store.dispatch("fetchItems");
  },
};
</script>

<style scoped>
.grid-items {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  margin: 5px 0 0 0;
}
</style>