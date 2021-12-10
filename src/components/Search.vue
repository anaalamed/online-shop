<template>
  <div class="boxSearch">
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
.boxSearch {
  width: 35%;
  align-self: center;
}

input {
  /* margin: 1rem; */
  border-radius: 0.5rem;
  direction: rtl;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  width: 70%;
}

input:focus {
  outline-color: var(--green);
}

.submitBtn {
  position: relative;
  top: 11px;
  right: -45px;
}

.submitBtn:hover {
  transform: scale(1.2);
  transition: 0.5s;
}

@media (max-width: 812px) {
  .boxSearch {
    width: 60%;
  }
  input {
    width: 60%;
    padding: 0.7rem;
  }
}
</style>