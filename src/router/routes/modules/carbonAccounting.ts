import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const carbonAccounting: AppRouteModule = {
  path: '/carbonAccounting',
  name: 'carbonAccounting',
  component: LAYOUT,
  redirect: '/carbonAccounting/productCarbonFootprint',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'productCarbonFootprint',
      name: 'productCarbonFootprint',
      component: () => import('/@/views/carbon-accounting/productCarbonFootprint/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default carbonAccounting;