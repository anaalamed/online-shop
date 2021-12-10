<template>
  <nav class="menu">
    <div v-for="category in categories" :key="category" class="category">
      <span @click="chooseCategory">
        {{ category }}
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      size: "(max-width: 812px)",
    };
  },
  computed: {
    categories() {
      let items = this.$store.state.items;
      let categoriesArr = ["כל המוצרים"];

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
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.menu {
  background: var(--green);
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  margin-top: 5rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: right;
  align-items: flex-start;
  direction: rtl;
  height: 90vh;
  z-index: 100;
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

@media (min-width: 812px) {
  .menu {
    display: none;
  }
}
</style>