<template>
  <div class="item" @click="handleClick">
    <h4 class="title">{{ item.title }}</h4>
    <p v-if="item.desc" class="description">{{ item.desc }}</p>

    <img :src="item.images[0]?.url" class="image" @load="onImgLoad" />

    <img
      v-if="isImgLoaded === false"
      src="@/assets/images/defaultPic.png"
      class="image"
    />

    <div class="wrap">
      <button class="extra_button">!לפרטים ורכישה</button>
    </div>

    <div class="prices">
      <p class="originPrice" v-if="item.origin_price">
        ₪ {{ item.origin_price }}
      </p>
      <p class="price">₪ {{ item.price }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ["item"],
  data() {
    return {
      isImgLoaded: false,
    };
  },
  methods: {
    handleClick() {
      this.$router.push(`/item/${this.item.id}`);
    },
    onImgLoad() {
      this.isImgLoaded = true;
    },
  },
};
</script>


<style scoped>
.item {
  border: 1px solid;
  border-color: var(--main);
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
  cursor: pointer;
  border-width: 3px;
  transform: scale(1.1);
  transition: 1s;
}

.item:hover .extra_button {
  display: inline-block;
}

.wrap {
  position: relative;
  width: 100%;
}

.extra_button {
  display: none;
  padding: 1rem 1.9rem;
  border-radius: 1rem;
  background: var(--main);
  color: var(--text);
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 10%;
  border: none;
  width: 80%;
  margin: 0 auto;
}

.title {
  color: var(--secondary);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0;
}

.image {
  max-width: 80%;
  max-height: 200px;
}

.image:hover {
  transform: scale(1.2);
  transition: 1s;
}

.originPrice {
  margin: 0;
  text-decoration: line-through;
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

@media (max-width: 812px) {
  .title,
  .price {
    font-size: 0.9rem;
  }
  .originPrice {
    font-size: 0.7rem;
  }
  .image {
    max-height: 130px;
  }
}
</style>