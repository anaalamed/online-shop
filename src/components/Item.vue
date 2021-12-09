<template>
  <div class="item">
    <h4 class="title">
      <!-- <router-link :to="{ name: 'item', params: { id: item.id } }"> -->
      {{ item.title }}
      <!-- </router-link> -->
    </h4>
    <p class="description">{{ item.desc }}</p>
    <img :src="item.images[0]?.url" :alt="item.title" class="image" />

    <p class="price">₪ {{ item.price }}</p>
    <p v-if="item.origin_price" style="text-decoration: line-through">
      ₪ {{ item.origin_price }}
    </p>
  </div>
</template>


<script>
export default {
  props: ["item"],
  methods: {},
};
</script>


<style scoped>
.item {
  border: 1px solid grey;
  border-color: rgba(144, 192, 60, 0.95);
}

.title {
  color: deeppink;
  font-weight: bold;
  font-size: 1.2rem;
}

.image {
  width: 80%;
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>