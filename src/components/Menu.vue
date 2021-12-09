<template>
  <nav class="menu">
    <div v-for="category in categories" :key="category" class="category">
      <span @click="chooseCategory">
        {{ category }}
      </span>
      <strong style="color: var(--pink)">&nbsp; |</strong>
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
  background: var(--green);
  color: white;
  position: relative;
  left: 0;
  right: 0;
  margin-top: 4rem;
  padding: 1rem;
}

.category {
  margin: 0.5rem;
  font-size: 1.2rem;
}

.category:hover,
.category:focus {
  font-weight: bold;
  color: var(--pink);
  transform: scale(1.1);
  transition: 1s;
}
</style>