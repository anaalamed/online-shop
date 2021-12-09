<template>
  <nav class="menu">
    <div v-for="category in categories" :key="category" class="category">
      <span @click="chooseCategory">
        {{ category }}
      </span>
      <strong style="color: deeppink">&nbsp; |</strong>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    categories() {
      let items = this.$store.state.items;
      let categoriesArr = ["הכל"];

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
      this.$store.dispatch("chooseCategory", { category: e.target.innerText });
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  background: rgba(144, 192, 60, 0.95);
  color: white;
}

.category {
  margin: 0.5rem;
  font-size: 1.5rem;
}

.category:hover,
.category:focus {
  font-weight: bold;
  color: deeppink;
  transform: scale(1.1);
  transition: 1s;
}
</style>