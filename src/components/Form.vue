<template>
  <div class="container">
    <img
      class="envelope"
      src="https://d3m9l0v76dty0.cloudfront.net/system/photos/481165/medium/f3db02175db9f3d4071bb62ce08ea7a7.png"
    />
    <h1 class="title">צור קשר עוד היום</h1>
    <p>ותהנה מהמוצרים החדשניים שלנו במחירים נוחים</p>

    <form
      action="https://webhook.site/808ee5e5-c042-4f11-8077-2cbaded49fc7"
      method="post"
      @submit="handleSubmit"
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
    },
  },
};
</script>


<style scoped>
.container {
  background: rgba(144, 192, 60, 0.95);
  margin-top: 5rem;
  padding-bottom: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.envelope {
  position: relative;
  top: -40px;
}

.title {
  font-weight: bold;
  color: black;
  margin: 0;
  margin: -38px 0 9px 0;
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

.submit {
  background: #d6006e;
  color: aliceblue;
  padding: 0.8rem 4rem;
  cursor: pointer;
}
</style>