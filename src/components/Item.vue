<template>
  <div class="item" @click="handleClick">
    <h4 class="title">{{ item.title }}</h4>
    <p class="description">{{ item.desc }}</p>
    <img :src="item.images[0]?.url" :alt="item.title" class="image" />

    <div class="prices">
      <p class="price">₪ {{ item.price }}</p>
      <p
        v-if="item.origin_price"
        style="margin: 0; text-decoration: line-through"
      >
        ₪ {{ item.origin_price }}
      </p>
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
  border-color: rgba(144, 192, 60, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: deeppink;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0;
}

.image {
  max-width: 80%;
  max-height: 200px;
  /* justify-self: center; */
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}
</style>