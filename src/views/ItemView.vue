<template>
  <div class="boxItem">
    <TopBar></TopBar>
    <Item />
    <FooterForm />
  </div>
</template>

<script>
import TopBar from "@/components/topBar/Topbar.vue";
import Item from "@/components/itemPage/Item.vue";
import FooterForm from "@/components/footer/FooterForm.vue";

export default {
  components: {
    FooterForm,
    TopBar,
    Item,
  },
};
</script>

<style scoped>
.boxItem {
  width: 100%;
  height: 100%;
}
</style>