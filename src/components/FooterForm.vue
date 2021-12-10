<template>
  <div class="container">
    <img
      class="envelope"
      src="https://d3m9l0v76dty0.cloudfront.net/system/photos/481165/medium/f3db02175db9f3d4071bb62ce08ea7a7.png"
    />
    <h1 class="title">צור קשר עוד היום</h1>
    <p>ותהנה מהמוצרים החדשניים שלנו במחירים נוחים</p>

    <form
      @submit="handleSubmit"
      action="https://webhook.site/808ee5e5-c042-4f11-8077-2cbaded49fc7"
      method="post"
    >
      <input required type="name" name="name" placeholder="שם" v-model="name" />
      <input
        required
        type="phone"
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
      <input type="submit" value="הרשם" class="submit" />
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
    };
  },
  methods: {
    handleSubmit() {
      // e.preventDefault();
      console.log(this.email, this.name, this.phone);

      // const asyncPostCall = async () => {
      //   try {
      //     const response = await fetch(
      //       "https://webhook.site/808ee5e5-c042-4f11-8077-2cbaded49fc7",
      //       {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           name: this.name,
      //           email: this.email,
      //           mobile: this.mobile,
      //         }),
      //       }
      //     );
      //     const data = await response.json();
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };

      // asyncPostCall();
    },
    // https://webhook.site/808ee5e5-c042-4f11-8077-2cbaded49fc7
  },
};
</script>


<style scoped>
.container {
  background: var(--green);
  margin-top: 4rem;
  padding-bottom: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  /* bottom: 0; */
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
.submit {
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
  outline-color: var(--pink);
}

.submit {
  background: #d6006e;
  color: aliceblue;
  padding: 0.8rem 4rem;
  cursor: pointer;
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