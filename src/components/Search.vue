<template>
  <div class="boxSearch">
    <i class="fas fa-search submitBtn" @click="toggleMenu"></i>

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
  color: var(--green);
  letter-spacing: 1.5px;
}

input:focus {
  outline-color: var(--green);
}

input::placeholder {
  color: var(--grey);
}

.fa-search {
  font-size: 1.7rem;
  color: var(--green);
}

.submitBtn {
  position: relative;
  top: 6px;
  right: -38px;
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