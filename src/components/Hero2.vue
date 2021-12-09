<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        <img :src="card" />
      </div>
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143315/original/5c2c879defa87d4c2bc3cf1d4218e812.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143438/original/03b0ebe5bf6a1a0ca2f32cde6e89e65d.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/156820/original/7268efc5181519e3f63e619d3f8ce761.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143750/original/338f1837e13e5ecd4efc01f12d830143.jpg",
        "https://s3-eu-west-1.amazonaws.com/konimboimages/system/photos/1143782/original/7d25b10a0b7917e7400a166ca0949f38.jpg",
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.setStep();
    this.resetTranslate();
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 2000);
    },

    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
.carousel {
  /* width: 170px; */
  /* width: 80%; */
  margin-top: 5rem;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 30%;
  margin-right: 10px;
  display: inline-flex;

  align-items: center;
  justify-content: center;
}

img {
  height: 40vh;
  max-width: 350px;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>