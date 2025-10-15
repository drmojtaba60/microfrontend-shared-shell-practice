<template>
  <div class="remote-wrapper">
    <!-- همیشه container وجود داره -->
    <div ref="container" class="remote-container"></div>

    <!-- لودر -->
    <div v-if="loading" class="loading">
      ⏳ Loading remote: {{ remote }} ...
    </div>

    <!-- خطا -->
    <div v-else-if="error" class="error">
      ❌ Failed to load <b>{{ remote }}</b><br />
      <small>{{ error }}</small>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import {useRouter} from "vue-router";
const router=useRouter();
let channel:BroadcastChannel;
const props = defineProps<{
  remote: string
  module: string
  base: string,
  isAuthenticated:boolean,
}>()

const container = ref<HTMLElement | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    if(container?.value)
      container.value.innerHTML='';
    const modules: Record<string, () => Promise<any>> = {
      'camp-remote': () => import('camp-remote/BootStrap'),
      // 'user-remote': () => import('user-remote/App'),
      // 'orders-remote': () => import('orders-remote/App'),
      // 'tasks-remote': () => import('tasks-remote/App'),
      // 'auth-remote': () => import('auth-remote/App')
      // 'user-remote': () => (window as any).__federation_method_getRemote('user-remote', './App'),
      // 'orders-remote': () => (window as any).__federation_method_getRemote('orders-remote', './App'),
      // 'tasks-remote': () => (window as any).__federation_method_getRemote('tasks-remote', './App'),
      // 'auth-remote': () => (window as any).__federation_method_getRemote('auth-remote', './App')
    }

    const loader = modules[props.remote]
    if (!loader) throw new Error(`Unknown remote: ${props.remote}`)

    const mod = await loader();
    if (mod?.mount) {
      mod.mount(container.value, props)
    } else {
      throw new Error(`Remote "${props.remote}" does not export mount()`)
    }
  } catch (err: any) {
    console.error(err)
    error.value = err.message || String(err)
  } finally {
    loading.value = false
  }

  window.addEventListener('remoteApp:needAuth', e => {
    console.log({elementEvent:(e as any).detail});
    //router.push({name:'shellLoginRoute',params:{q:(e as any).detail.fullPath}});
  });

  channel = new BroadcastChannel('remote-apps-channel')
  channel.onmessage = (evt: MessageEvent) => {
    console.log({message:evt.data});
    if(evt.data.type==='REMOTEAPP_NEED_AUTH')
      router.push({name:'shellLoginRoute'});
  };
})
onUnmounted(()=>{
  window.removeEventListener('remoteApp:needAuth', e => {});
  channel?.close();
})
</script>

<style scoped>
.remote-wrapper { padding: 1rem; min-height: 200px; }
.remote-container { width: 100%; min-height: 300px; }
.error { color: red; font-weight: bold; }
</style>
