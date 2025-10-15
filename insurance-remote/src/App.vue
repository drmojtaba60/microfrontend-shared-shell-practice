<script setup>
import { modal } from '@shared-packages/antd/components';
import {onMounted} from "vue";

onMounted(() => {
  modal.info({
    title: 'ریموت اپ-ماژول-بیمه تکمیلی',
    content: 'استفاده از کتابخانه Ant Design در فضای کاری اشتراکی در Shared-Packs',
  });
})
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
