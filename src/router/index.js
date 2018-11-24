import Vue from 'vue';
import Router from 'vue-router';
import Shop from '@/views/Shop';
import QrCode from '@/views/QrCode';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/qr_code',
      name: 'qrCode',
      component: QrCode,
    },
  ],
});
