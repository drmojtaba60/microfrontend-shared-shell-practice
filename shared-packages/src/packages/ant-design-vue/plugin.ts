import type { App } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// انواع TypeScript برای global properties
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof import('ant-design-vue')['message'];
    $notification: typeof import('ant-design-vue')['notification'];
    $modal: typeof import('ant-design-vue')['Modal'];
  }
}

// پیکربندی کامل Ant Design
export default {
  install(app: App): void {
    // استفاده از Ant Design
    app.use(Antd);

    // ثبت global properties با نوع‌دهی صحیح
    // app.config.globalProperties.$message = Antd.message;
    // app.config.globalProperties.$notification = Antd.notification;
    // app.config.globalProperties.$modal = Antd.Modal;

    // ارائه دسترسی مستقیم از طریق provide/inject
    app.provide('antd', Antd);
  }
};

// Export انواع برای استفاده در کامپوننت‌ها
//export type { MessageApi, NotificationApi } from 'ant-design-vue';
