<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      theme="dark"
      class="sidebar-dark"
    >
      <div class="logo-dark flex align-center gap-1" >
        <img
          v-if="!collapsed"
          src="@/assets/logo.jpg"
          alt="Logo"
          style="height: 32px; margin-right: 8px;"
        />
        <span v-if="!collapsed" style="color: white; font-weight: bold;">
          معماری میکروفرانت سخا پلاس
        </span>
        <img
          v-else
          src="@/assets/logo.svg"
          alt="Logo"
          style="height: 32px;"
        />
      </div>

      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item key="/dashboard" @click="navigateTo('/dashboard')">
          <template #icon>
            <Icons.DashboardOutlined />
          </template>
          <span>داشبورد</span>
        </a-menu-item>

        <a-sub-menu key="users">
          <template #icon>
            <Icons.TeamOutlined />
          </template>
          <template #title>مدیریت اردوهای فرهنگی</template>
          <a-menu-item key="/camps" @click="navigateTo('/camps')">
            لیست اردوها
          </a-menu-item>
          <a-menu-item key="/users/add" @click="navigateTo('/users/add')">
            افزودن کاربر
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="/reports" @click="navigateTo('/reports')">
          <template #icon>
            <Icons.BarChartOutlined />
          </template>
          <span>گزارش‌ها</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <div class="header-content flex justify-between align-top">
          <div class="pt-5">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="toggleCollapsed"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="toggleCollapsed"
            />
            <a-breadcrumb class="breadcrumb text-white">
              <a-breadcrumb-item>صفحه اصلی</a-breadcrumb-item>
              <a-breadcrumb-item class="text-white">داشبورد</a-breadcrumb-item>
            </a-breadcrumb>
          </div>

          <div >
            <a-button type="text" @click="toggleTheme">
              <Icons.BulbOutlined />
            </a-button>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click.prevent>
                <a-avatar size="small" style="background-color: #87d068">
                  <Icons.UserOutlined />
                </a-avatar>
                <span style="margin-right: 8px;">مدیر سیستم</span>
                <Icons.DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="showProfile">
                    <Icons.UserOutlined />
                    پروفایل
                  </a-menu-item>
                  <a-menu-item @click="showSettings">
                    <Icons.SettingOutlined />
                    تنظیمات
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item @click="handleLogout" danger>
                    <Icons.LogoutOutlined />
                    خروج
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, watch,defineAsyncComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {Icons} from '@shared-packages/icons/antd-icons'
import { message } from '@shared-packages/antd'

const router = useRouter()
const route = useRoute()

const collapsed = ref(false)
const selectedKeys = ref([route.path])
// Import آیکون‌ها از shared
// const MenuUnfoldOutlined = defineAsyncComponent(() =>
//   import('@shared-packages/icons').then(module => module.MenuUnfoldOutlined)
// );
//
// const MenuFoldOutlined = defineAsyncComponent(() =>
//   import('@shared-packages/icons').then(module => module.MenuFoldOutlined)
// );
// مشاهده تغییرات مسیر
watch(() => route.path, (newPath) => {
  selectedKeys.value = [newPath]
})

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}

const navigateTo = (path) => {
  router.push(path)
}

const toggleTheme = () => {
  message.info('تغییر تم در حال توسعه...')
}

const showProfile = () => {
  message.info('باز کردن پروفایل...')
}

const showSettings = () => {
  message.info('باز کردن تنظیمات...')
}

const handleLogout = () => {
  message.success('خروج با موفقیت انجام شد')
  router.push('/login')
}

const handleMenuClick = ({ key }) => {
  selectedKeys.value = [key]
  // در اینجا می‌توانید مسیریابی انجام دهید
  console.log('Menu item clicked:', key)
}
</script>

<style scoped>

</style>
