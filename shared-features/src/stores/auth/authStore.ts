import { defineStore } from 'pinia';
import {AuthModel} from "./models/AuthModel.ts";

export const useAuthStore = defineStore('auth', () => {
  //const state = reactive({ token: null, user: null });
  //const auth = new AuthModel(state);
  const auth = new AuthModel();

  return {
    authData: auth.authData,
    user: auth.user,
    token: auth.token,
    isAuthorized: auth.isAuthorized,
    setAuth: auth.setAuth.bind(auth),
    clearAuth: auth.clearAuth.bind(auth),
    needToAuth: auth.needToAuth,
    setNeedToAuth: auth.setNeedToAuth.bind(auth),
  };
});
