<template>
  <div>
    <div class="container pl-5">
      <ul class="list-group d-md-none d-block">
        <li class="list-group-item">
          <router-link to="/admin/products" class="nav-link">
            <i class="fas fa-box-open"></i> 產品列表
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/admin/orders" class="nav-link">
            <i class="far fa-list-alt"></i> 訂單列表
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/admin/coupon" class="nav-link">
            <i class="far fa-list-alt"></i> 優惠卷
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/Dashboard/customer_order" class="nav-link">
            <i class="far fa-list-alt"></i> 模擬訂單
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/" class="nav-link">
            <i class="far fa-list-alt"></i> 前台
          </router-link>
        </li>
      </ul>
    </div>

    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link">
              <i class="fas fa-box-open"></i> 產品列表
            </router-link>
            <router-link to="/admin/orders" class="nav-link">
              <i class="far fa-list-alt"></i> 訂單列表
            </router-link>
            <router-link to="/admin/coupon" class="nav-link">
              <i class="far fa-list-alt"></i> 優惠卷
            </router-link>
          </li>
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>模擬功能s</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/Dashboard/customer_order" class="nav-link">
              <i class="far fa-list-alt"></i> 模擬訂單
            </router-link>
          </li>
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>模擬前台</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="far fa-list-alt"></i> 前台
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.list-group {
  margin-top: 110px;
  li {
    width: 85vw;
  }
}
</style>
