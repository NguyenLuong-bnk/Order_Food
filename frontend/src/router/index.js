import { createWebHistory, createRouter } from "vue-router";
import Login from '../pages/LoginTemplate.vue';
import Register from '../pages/RegisterTemplate.vue';
import Home from '../pages/HomeTemplate.vue';
import About from '../pages/AboutTemplate.vue';
import Promo from '../pages/PromoTemplate.vue';
import Menu from '../pages/MenuTemplate.vue';
import Table from '../pages/TableTemplate.vue';
import Cart from '../pages/CartTemplate.vue';
import Checkout from '../pages/CheckoutTemplate.vue';
import Thank from '../pages/ThankTemplate.vue';
import MyOrder from '../pages/MyOrder.vue';
import Admin from '../admin/views/AdminTemplate.vue';
import Managerfood from '../admin/views/ManagerFoodTemplate.vue';
import User from '../admin/views/UserTemplate.vue'
import Bookingtable from '../admin/views/BookingtableTemplate.vue'
import AddFood from '../admin/views/AddFoodTemplate.vue'
import ManagerOrder from '../admin/views/OrderTemplate.vue'
import UpdateFood from '../admin/views/UpdateFoodTemplate.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promo,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/thank",
    name: "Thank",
    component: Thank,
  },
  {
    path: "/myorder",
    name: "MyOrder",
    component: MyOrder,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/managerfood",
    name: "managerfood",
    component: Managerfood,
  },
  {
    path: "/admin/managerfood/add",
    name: "AddFood",
    component: AddFood,
  },
  {
    path: "/admin/managerfood/update",
    name: "UpdateFood",
    component: UpdateFood,
  },
  {
    path: "/admin/user",
    name: "User",
    component: User,
  },
  {
    path: "/admin/bookingtable",
    name: "Bookingtable",
    component: Bookingtable,
  },
  {
    path: "/admin/managerorder",
    name: "ManagerOrder",
    component: ManagerOrder,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
    // https://stackoverflow.com/questions/68504803/how-can-i-make-a-catch-all-other-route-in-vue-router-also-catch-the-url-when-p
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;