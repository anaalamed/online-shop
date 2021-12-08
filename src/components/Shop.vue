<template>
  <div>
    <h1>Shop</h1>

    <div class="grid-items">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  computed: {
    items() {
      if (this.$store.state.currentCategory) {
        return this.$store.state.items.filter(
          (item) =>
            item.store_category_title === this.$store.state.currentCategory
        );
      } else return this.$store.state.items;
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
}
</style>