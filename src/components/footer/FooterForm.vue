<template>
  <div class="container">
    <img
      class="envelope"
      src="https://d3m9l0v76dty0.cloudfront.net/system/photos/481165/medium/f3db02175db9f3d4071bb62ce08ea7a7.png"
    />
    <h1 class="title">צור קשר עוד היום</h1>
    <p>ותהנה מהמוצרים החדשניים שלנו במחירים נוחים</p>

    <form @submit="handleSubmit" method="post">
      <input required type="name" name="name" placeholder="שם" v-model="name" />
      <input
        required
        type="tel"
        name="phone"
        placeholder="טלפון"
        v-model="phone"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="מייל"
        v-model="email"
        class="email"
      />
      <input type="submit" value="הרשם" class="submitBtn" />
    </form>

    <div v-if="isShowModal">
      <Modal
        header="Thank You"
        text="Your details were send ☺️"
        @close="toggleModal"
      ></Modal>
    </div>
  </div>
</template>


<script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      isShowModal: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      const asyncPostCall = async () => {
        try {
          const response = await fetch(
            "https://webhook.site/808ee5e5-c042-4f11-8077-2cbaded49fc7",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: this.name,
                email: this.email,
                mobile: this.phone,
              }),
            }
          );
          const status = await response.status;
          if (status === 200) this.isShowModal = true;
        } catch (error) {
          console.log(error);
        }
      };
      asyncPostCall();
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
  components: {
    Modal,
  },
};
</script>


<style scoped>
.container {
  grid-area: footer;
  background: var(--main);
  margin-top: 4rem;
  padding-bottom: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  background-size: cover;
  width: 100%;
}

.envelope {
  position: relative;
  top: -40px;
}

.title {
  font-weight: bold;
  color: black;
  margin: 0;
  margin: -49px 0 5px 0;
}

p {
  margin: 0;
}

form {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}

input,
.submitBtn {
  margin: 1rem;
  border-radius: 0.5rem;
  direction: rtl;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  width: 15%;
}

.email {
  width: 20%;
}

input:focus {
  outline-color: var(--secondary);
}

.submitBtn {
  background: #d6006e;
  color: aliceblue;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 812px) {
  form {
    flex-direction: column;
  }

  input,
  .email,
  .submit {
    margin: 5px;
    padding: 10px;
    width: 80%;
  }

  .submit {
    width: 85%;
  }
}
</style>