import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'zh-CN', 'ja-JP', 'id-ID', 'vi-VN'],
  defaultLocale: 'en-US'
});
