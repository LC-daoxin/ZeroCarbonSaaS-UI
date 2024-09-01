import type { AppRouteModule } from '/@/router/types';

import { t } from '/@/hooks/web/useI18n';

const basicSetting: AppRouteModule = {
  path: '/factor',
  name: 'factor',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'detail',
      name: 'detail',
      component: () => import('/@/views/basic-setting/environmentFactor/factorDetail.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default basicSetting;
