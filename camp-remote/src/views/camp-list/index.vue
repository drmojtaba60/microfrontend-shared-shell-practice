<script setup lang="ts">
  import './CampList.less';
  //import { modal } from '@shared-packages/antd';
  import { modal } from '@shared-packages/antd/components';

  import {onMounted} from "vue";

  // استفاده در کامپوننت
  const showInfo = () => {
    modal.info({
      title: 'Info',
      content: 'استفاده از کتابخانه Ant Design در فضای کاری اشتراکی در Shared-Packs',
    });
  };
  const camps = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' },
    { id: 4, name: 'Monitor' },
    { id: 5, name: 'Keyboard' }
  ];
  onMounted(() => {
    showInfo();
  })
</script>

<template>
  <div class="camp-list">
    Camp List
  </div>
  <ul>
    <li v-for="p in camps" :key="p.id">
      <!-- لینک به صفحهٔ جزئیات -->
      <router-link :to="`/${p.id}`">
        {{ p.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
