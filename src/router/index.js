import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "@/components/pages/Login";
import Dashboard from "@/components/Dashboard";
import Products from "@/components/pages/Products";
import Coupon from "@/components/pages/Coupon";
import Orders from "@/components/pages/Orders";
import CustomerOrders from "@/components/pages/CustomerOrders";
import CustomerCheckout from "@/components/pages/CustomerCheckout";
import Product from "@/components/pages/views/Product";
import ProductDetail from "@/components/pages/views/ProductDetail";
import Index from "@/components/pages/views/Index";
import AboutUs from "@/components/pages/views/AboutUs";
import News from "@/components/pages/views/News";
import Shop from "@/components/pages/views/Shop";
import Cart from "@/components/pages/views/Cart";
import Pay from "@/components/pages/views/Pay";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "login"
  },

  {
    path: "/",
    name: "Index",
    component: Index,
    meta:{
      title:"slack 照顧你每一寸肌膚"
    }
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/pay/:orderId",
    name: "Pay",
    component: Pay
  },

  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: "coupon",
        name: "Coupon",
        component: Coupon,
        meta: { requiresAuth: true }
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },

  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail
  },

  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },

  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "customer_order",
        name: "CustomerOrder",
        component: CustomerOrders
      },
      {
        path: "customer_checkout/:orderId",
        name: "CustomerCheckout",
        component: CustomerCheckout
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    //轉頁面 回到最上層
    // return desired position
    return { x: 0, y: 0 };
  }
});

export default router;
