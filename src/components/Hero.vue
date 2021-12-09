<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143778/original/1cdb8038d0d29c21e163514cf975d91b.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143315/original/5c2c879defa87d4c2bc3cf1d4218e812.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143438/original/03b0ebe5bf6a1a0ca2f32cde6e89e65d.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/156820/original/7268efc5181519e3f63e619d3f8ce761.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 3000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  /* transition: all 0.9s ease; */
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  /* height: 600px; */
  /* width: 100%; */
  height: 60vh;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>