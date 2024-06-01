import { createWebHistory, createRouter } from 'vue-router';

import LoginForm from './components/LoginForm.vue';
import PayInvoice from './components/PayInvoice.vue';
import UnRegisteredUser from './components/UnRegisteredUser.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/pay-invoice', component: PayInvoice },
  { path: '/unregistered-user', component: UnRegisteredUser },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
