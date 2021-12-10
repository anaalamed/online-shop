<template>
  <ul class="menu">
    <li
      v-for="category in categories"
      :key="category"
      :class="['category', { choosen: category === this.currentCategory }]"
    >
      <span @click="chooseCategory">
        {{ category }}
      </span>
      <!-- <strong class="separator" style="color: var(--pink)">&nbsp; |</strong> -->
    </li>
  </ul>
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
    currentCategory() {
      return this.$store.state.currentCategory;
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 4rem;
  padding: 1rem 5rem 1rem 5rem;
  list-style: none;
}

li::before {
  display: inline-block;
  content: "|";
  position: relative;
  left: -0.5rem;
  font-weight: bold;
  color: var(--pink);
}

.category {
  margin: 0.5rem;
  font-size: 1.2rem;
}

.category:hover {
  font-weight: bold;
  color: var(--grey);
  transform: scale(1.1);
  transition: 1s;
  cursor: pointer;
}

.choosen {
  font-weight: bold;
  color: var(--pink);
}

@media (max-width: 812px) {
  .menu {
    display: none;
  }

  .category {
    font-size: 1rem;
  }
}

@media (max-width: 1024px) {
  .category {
    font-size: 1rem;
    margin: 5px;
  }
}
</style>