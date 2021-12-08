<template>
  <div class="item">
    <h4 class="title">
      <!-- <router-link :to="{ name: 'item', params: { id: item.id } }"> -->
      {{ item.title }}
      <!-- </router-link> -->
    </h4>
    <p class="description">{{ item.desc }}</p>
    <img :src="item.images[0]?.url" :alt="item.title" class="image" />
    <p>{{ item.price }}</p>
  </div>
</template>


<script>
export default {
  props: ["item"],
  methods: {},
};
</script>


<style>
.item {
  border: 1px solid grey;
  /* background: grey; */
}

.title {
  color: blue;
}

.image {
  width: 300px;
}
</style>