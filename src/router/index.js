import Vue from 'vue';
import VueRouter from 'vue-router'; 
import Products from '../views/Products.vue';
import Index from '@/views/index.vue';
import SingleProduct from '../views/SingleProduct.vue';
import Signup from '../views/Signup.vue';
 

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'index',
    component:Index
  } ,
  {
    path:'/products',
    name:'products',
    component:Products, 
  },
  {
    path:'/products/:productId',
    name:'singleProduct',
    component:SingleProduct
  },
  {
    path:'/Signup',
    name:'signup',
    component:Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
