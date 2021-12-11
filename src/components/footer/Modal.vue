<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <button class="button" @click="closeModal">ok</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>


<style >
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: var(--main);
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: var(--secondary);
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
  color: var(--secondary);
}
.button {
  background: var(--secondary);
  color: var(--main);
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
}
</style>