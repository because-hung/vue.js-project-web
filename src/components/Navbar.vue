<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Slack</a>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap px-3" style="background-color:gray">
          <a class="nav-link " href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/signin");
        }
      });
    }
  }
};
</script>
