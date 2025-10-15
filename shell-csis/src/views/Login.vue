<template>
  <div class="login-container">
    <a-card title="ورود به سیستم" class="login-card">
      <a-form
        :model="formState"
        name="loginForm"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        autocomplete="off"
        layout="vertical"
      >
        <a-form-item
          label="نام کاربری"
          name="username"
          :rules="[{ required: true, message: 'لطفا نام کاربری را وارد کنید!' }]"
        >
          <a-input v-model:value="formState.username" size="large">
            <template #prefix>
              <Icons.UserOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="رمز عبور"
          name="password"
          :rules="[{ required: true, message: 'لطفا رمز عبور را وارد کنید!' }]"
        >
          <a-input-password v-model:value="formState.password" size="large">
            <template #prefix>
              <Icons.LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 0 }">
          <a-checkbox v-model:checked="formState.remember">
            مرا به خاطر بسپار
          </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 0 }">
          <a-button
            type="primary"
            html-type="submit"
            size="large"
            :loading="loading"
            block
          >
            ورود
          </a-button>
        </a-form-item>
      </a-form>

      <div class="login-links">
        <a href="#">رمز عبور را فراموش کرده‌اید؟</a>
        <a href="#">ثبت‌نام کنید</a>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import {Icons} from '@shared-packages/icons/antd-icons'
import { message } from '@shared-packages/antd'

import {useAuthStore} from 'shared-features/stores';
import {onMounted} from "vue";
import {useRoute,useRouter} from "vue-router";

const store = useAuthStore();
const router = useRouter();
const loading = ref(false);
onMounted(() => {
  if (store)
    console.log({store});
})

function setTokenFake() {

  store?.setAuth('tokenFacke@123456', {id: 4545, name: 'mojtaba shaghi'});
  console.log({store});
  router.push('/camps');
}

function clearTokenFake() {
  store?.clearAuth();
}


const formState = reactive({
  username: '',
  password: '',
  remember: false,
});

const onFinish = async (values) => {
  loading.value = true;
  try {
    // شبیه‌سازی درخواست لاگین
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('مقادیر فرم:', values);
    message.success('ورود موفقیت‌آمیز بود');
    setTokenFake();
  } catch (error) {
    message.error('خطا در ورود');
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (errors) => {
  console.log('خطاهای فرم:', errors);
  message.warning('لطفا فرم را به درستی پر کنید');
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.login-links {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

:deep(.ant-card-head-title) {
  text-align: center;
  font-size: 1.5rem;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500;
}
</style>
