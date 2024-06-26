import { getLang } from '@utils'

export const getLocale = () => {
  const lang = getLang();
  const locale = {
    zh: {
      footer: {
        copyright: '我在找 版权所有',
        weComGroup: '企业微信群',
        weComGroupDesc: '欢迎微信扫码联系我们',
      },
    },
    en: {
      footer: {
        copyright: 'Wozaizhao Copyright',
        weComGroup: 'WeCom Group',
        weComGroupDesc: 'Welcome to contact us',
      },
    }
  };

  return locale[lang];
};
