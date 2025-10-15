<script setup lang="ts">
import { AAlert } from '@shared-packages/antd/components';
</script>

<template>
  <h1>Camps Remote App. Welcome</h1>
  <v-alert
    color="warning"
    icon="$warning"
    title="Vuefity....."
    text="Test Using Vuefity.."
  ></v-alert>
  <div class="my-5">
    <a-alert message="Success Text Using Ant Design UI Library" type="success" />
  </div>

  <div class="flex justify-around items-center m-5">
    <div class="h-36 w-36 border bg-red-100">100</div>
    <div class="h-36 w-36 border bg-red-100">200</div>
    <div class="h-36 w-36 border bg-red-200">400</div>
    <div class="h-36 w-36 border bg-red-300">500</div>
    <div class="h-36 w-36 border bg-red-400">1</div>
    <div class="h-36 w-36 border bg-red-500">1</div>
  </div>
  <div style="margin:1rem;padding:1rem;border: 1px solid #ccc;border-radius:.5rem">
      <router-view />
  </div>
</template>

<style scoped></style>
