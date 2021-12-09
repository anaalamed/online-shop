<template>
  <div>
    <img
      class="submitBtn"
      @click="handleSubmit"
      src="https://img.icons8.com/ios/30/000000/search--v1.png"
    />

    <input placeholder="חפש פריט..." v-model="search" @input="handleSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  methods: {
    handleSubmit() {
      let filtered = this.items.filter((item) =>
        item.title.toLowerCase().includes(this.search.toLowerCase())
      );
      this.$store.dispatch("filterItems", { filteredItems: filtered });
    },
  },
};
</script>

<style scoped>
input {
  margin: 1rem;
  border-radius: 0.5rem;
  direction: rtl;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  /* width: 70%; */
}

input:focus {
  outline-color: var(--green);
}

.submitBtn {
  position: relative;
  top: 10px;
  right: -60px;
}

.submitBtn:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
</style>