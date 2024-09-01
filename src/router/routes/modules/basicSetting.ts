import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const basicSetting: AppRouteModule = {
  path: '/basicSetting',
  name: 'basicSetting',
  component: LAYOUT,
  redirect: '/basicSetting/factorLibrary',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'factorLibrary',
      name: 'factorLibrary',
      component: () => import('/@/views/basic-setting/environmentFactor/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default basicSetting;

