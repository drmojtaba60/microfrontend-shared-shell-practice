// تنظیمات پلاگین + re-export کامپوننت‌ها
import { App } from 'vue';
import PrimeVue from 'primevue/config';
// import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';

// ✅ Import و Re-export کامپوننت‌های مورد نیاز
export { default as Button } from 'primevue/button';
export { default as Dialog } from 'primevue/dialog';
export { default as InputText } from 'primevue/inputtext';
export { default as DataTable } from 'primevue/datatable';
export { default as Column } from 'primevue/column';
export { default as Toast } from 'primevue/toast';

// ✅ سرویس‌ها را هم export کنید (اگر نیاز بود)
export { useToast } from 'primevue/usetoast';

// ✅ پلاگین برای تنظیمات گلوبال
const PrimeVuePlugin = {
  install(app: App) {
    app.use(PrimeVue, {
      theme: {
        preset: Lara,//Aura
      }
    });

    // اگر سرویس‌ها نیاز به نصب دارند:
    // app.use(ToastService); // ولی ToastService فقط برای Options API است؛ در Composition API نیازی نیست
  }
};

export default PrimeVuePlugin;
