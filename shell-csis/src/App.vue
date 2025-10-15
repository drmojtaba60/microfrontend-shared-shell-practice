<script setup lang="ts">
import Sidebar from '@/components/sidebar/Index.vue'
import {useAuthStore} from 'shared-features/stores';
import {onMounted, watch} from "vue";
import {useRouter} from "vue-router";
const store = useAuthStore();
const router = useRouter();
onMounted(() => {
  watch(() => store.needToAuth, (newVal, oldVal) => {
    console.log('App.Watch', newVal);
    if (newVal && newVal !== oldVal)
      router.push({name: 'shellLoginRoute'});
  })
})
</script>
<template>
  <div class="min-h-screen min-w-screen m-0 p-0 flex-col justify-between align-items-center">
    <Sidebar />
  </div>

</template>

<style scoped></style>
