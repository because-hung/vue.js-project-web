<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // const api = 'https://vue-course-api.hexschool.io/api/hungwei/products';
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
    // console.log(process.env.API_PATH,process.env.CUSTOMPATH);
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
