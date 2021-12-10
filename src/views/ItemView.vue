<template>
  <div class="item" @click="handleClick">
    <h4 class="title">{{ item.title }}</h4>
    <p v-if="item.desc" class="description">{{ item.desc }}</p>

    <div class="images">
      <div></div>
      <img
        :src="currentImg ? currentImg : item.images[0]?.url"
        :alt="item.position"
        class="currentImage"
      />

      <div class="icons">
        <img
          @click="handleChoose"
          v-for="image in item.images"
          :key="image.id"
          :src="image.url"
          :alt="item.title"
          class="icon"
        />
      </div>
    </div>

    <span>
      <span
        v-if="item.origin_price"
        style="text-decoration: line-through; margin-right: 20px"
      >
        ₪ {{ item.origin_price }}
      </span>
      <span class="price">₪ {{ item.price }}</span>
    </span>

    <FotterForm />
  </div>
</template>

<script>
import FotterForm from "@/components/FotterForm.vue";

export default {
  data() {
    return {
      currentImg: "",
    };
  },
  computed: {
    item() {
      return this.$store.state.items.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
  methods: {
    handleChoose(e) {
      this.currentImg = e.target.getAttribute("src");
    },
  },
  components: {
    FotterForm,
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  max-width: 100%;
  /* height: 100%; */
}

.title {
  color: var(--pink);
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0;
}

.images {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  max-width: 85%;
  /* max-height: 100vh; */
}

.image {
  /* max-width: 80%;
  height: 70vh; */
}

.currentImage {
  /* width: 80%; */
  /* height: 80%; */
  max-width: 90%;
  max-height: 55vh;
}

.icons {
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
}

.icon {
  max-width: 60px;
  max-height: 100px;
  margin: 10px;
}

.icon:hover {
  width: 100px;
  transform: scale(1.2);
}

.choosen {
  width: 100px;
  transform: scale(1.2);
  border: 1px solid var(--green);
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}
</style>
