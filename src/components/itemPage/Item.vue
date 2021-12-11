<template>
  <div class="item" @click="handleClick">
    <h4 class="title">{{ item.title }}</h4>
    <p v-if="item.desc" class="description">{{ item.desc }}</p>

    <div class="images">
      <img
        :src="currentImg ? currentImg : item.images[0]?.url"
        :alt="item.position"
        class="currentImage"
        @load="onImgLoad"
      />

      <img
        v-if="isImgLoaded === false"
        src="@/assets/images/defaultPic.png"
        class="image"
      />

      <div class="icons">
        <img
          @click="handleChoose"
          v-for="image in item.images"
          :key="image.id"
          :src="image.url"
          :alt="item.title"
          :class="[{ choosen: image.url === currentImg }, 'icon']"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImg: "",
      isImgLoaded: false,
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
    onImgLoad() {
      this.isImgLoaded = true;
    },
  },
  mounted() {
    this.currentImg = this.item.images[0].url;
  },
};
</script>


<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 68vh;
  margin-top: 5rem;
}

.title {
  color: var(--secondary);
  font-weight: bold;
  font-size: 2rem;
}

.images {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}

.currentImage {
  max-width: 90%;
  max-height: 60vh;
}

.currentImage:hover {
  transform: scale(1.1);
  transition: 1s;
}

.icons {
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
}

.icon {
  max-width: 60px;
  max-height: 100px;
  margin: 10px;
  border: 1px solid var(--main);

  border-radius: 0.5rem;
}

.icon:hover {
  width: 100px;
  transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
}

.choosen {
  width: 100px;
  transform: scale(1.2);
  border-color: var(--secondary);
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

@media (max-width: 812px) {
  .item {
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .title {
    font-size: 1.5rem;
  }

  .images {
    flex-direction: column;
  }

  .currentImage {
    max-width: 90%;
  }

  .icons {
    flex-direction: row;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .icon {
    margin: 1px;
  }
}
</style>