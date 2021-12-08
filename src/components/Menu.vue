<template>
  <h1>menu</h1>
  <nav class="menu">
    <p
      v-for="category in categories"
      :key="category"
      class="category"
      @click="chooseCategory"
    >
      {{ category }}
    </p>
  </nav>
</template>

<script>
export default {
  computed: {
    categories() {
      let items = this.$store.state.items;
      let categoriesArr = [];

      items.map((item) => {
        if (categoriesArr.includes(item.store_category_title) === false) {
          categoriesArr.push(item.store_category_title);
        }
      });

      return categoriesArr;
    },
  },
  methods: {
    chooseCategory(e) {
      console.log(e.target.innerText);
      this.$store.dispatch("chooseCategory", { category: e.target.innerText });
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.category {
  /* background: coral; */
  margin: 0.5rem;
  font-size: 1.5rem;
}

.category:hover,
.category:focus {
  font-weight: bold;
  color: navy;
  transform: scale(1.1);
  transition: 1s;
}
</style>