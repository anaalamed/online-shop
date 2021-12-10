<template>
  <div class="item" @click="handleClick">
    <h4 class="title">{{ item.title }}</h4>
    <p class="description">{{ item.desc }}</p>
    <img :src="item.images[0]?.url" :alt="item.title" class="image" />

    <div class="prices">
      <p
        v-if="item.origin_price"
        style="margin: 0; text-decoration: line-through"
      >
        ₪ {{ item.origin_price }}
      </p>
      <p class="price">₪ {{ item.price }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ["item"],
  methods: {
    handleClick() {
      this.$router.push(`/item/${this.item.id}`);
    },
  },
};
</script>


<style scoped>
.item {
  border: 1px solid grey;
  border-color: var(--green);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
}

.item:hover {
  background: rgb(209, 248, 145);
  transform: scale(1.1);
  transition: 1s;
  cursor: pointer;
  border-width: 3px;
}

.title {
  color: var(--pink);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0;
}

.image {
  max-width: 80%;
  max-height: 200px;
  mix-blend-mode: multiply;
}

.image:hover {
  transform: scale(1.2);
  transition: 1s;
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}
</style>