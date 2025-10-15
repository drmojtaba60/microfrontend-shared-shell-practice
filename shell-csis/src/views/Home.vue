<template>
  <div class="flex justify-around items-center">
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warn" severity="warn" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />
  </div>
  <div>
    <h6>{{ store?.token }}</h6>
    <Button label="SetToken fake" @click="setTokenFake">
      Set Token Fake
    </Button>

    <button @click="clearTokenFake">
      clear Token Fake
    </button>
  </div>

</template>
<script setup>
import {useAuthStore} from 'shared-features/stores';
import {onMounted} from "vue";
import {Button, Dialog,InputText} from '@shared-packages/primevue'
const store = useAuthStore();
onMounted(() => {
  if (store)
    console.log({store});
})

function setTokenFake() {

  store?.setAuth('tokenFacke@123456', {id: 4545, name: 'mojtaba shaghi'});
  console.log({store});
}

function clearTokenFake() {
  store?.clearAuth();
}
</script>
