import { createWebHashHistory, createRouter } from 'vue-router';

import DashboardPage from '@/pages/Dashboard/DashboardPage';

const routes = [
  { path: '/dashboard', component: DashboardPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
