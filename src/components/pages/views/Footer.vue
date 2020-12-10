<template>
  <div class="footer mt-3">
    <footer class="py-2">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4">
            <ul class="list-group ">
              <li class="list-group-item border-0 h5" id="about">ABOUT</li>
              <li class="list-group-item border-0">
                <router-link to="/latestNews">最新活動</router-link>
              </li>
              <li class="list-group-item border-0">
                <router-link to="/aboutUs">關於我們</router-link>
              </li>
              <li class="list-group-item border-0">
                <router-link to="/marketInfo">門市資訊</router-link>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4">
            <ul class="list-group ">
              <li class="list-group-item border-0 h5">CONTACT</li>
              <li class="list-group-item border-0">
                <i class="fa fa-clock"></i> 服務時間: 24hr
              </li>
              <li class="list-group-item border-0">
                <i class="fa fa-envelope"></i> 信箱: SlackWash@gmail.com
              </li>
              <li class="list-group-item border-0">
                <i class="fa fa-phone"></i> 服務電話: 0977-556633
              </li>
            </ul>
          </div>
          <div class="text-right col-md-4 mt-3">
            <div>
              <a href="#"
                ><img src="../../../../src/assets/img/logo2.png" alt=""
              /></a>
            </div>
            <ul class="list-inline mt-3">
              <li class="list-inline-item">
                <i class="fab fa-facebook-square fa-2x"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram fa-2x"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter-square fa-2x"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-line fa-2x"></i>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/npcenthusiasm">
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container-fluid mt-3 copright">
        <div class="text-center">© Copright 2020 because-hung</div>
        <div class="text-center">資料、圖片來源皆來自網路</div>
        <div class="text-center">僅個人作品練習，無任何商業用途</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #dcdcdc;
}

.footer .list-group li {
  background-color: #dcdcdc;
}

.copright {
  border-top: 1px solid gray;
}
</style>
