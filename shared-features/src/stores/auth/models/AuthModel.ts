import { reactive, computed } from 'vue';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

export class AuthModel {
  // constructor(private state: { token: string | null; user: User | null }) {
  //   this.state.token = state.token;
  //   this.state.user = state.user;
  // }
  private state = reactive({
    user: null as User | null,
    token: null as string | null,
    needToAuth:false as boolean | null,
  });

  get user() {
    return computed(()=>this.state.user);
  }

  get token() {
    return computed(()=>this.state.token);
  }

  get isAuthorized() {
    return computed(() => !!this.state.token && !!this.state.user);
  }

  setAuth(token: string, user: User) {
    this.state.token = token;
    this.state.user = user;
    this.state.needToAuth = false;
  }

  clearAuth() {
    this.state.token = null;
    this.state.user = null;
  }

  get authData() {
    return this.state;
  }
  get needToAuth() {
    return computed(()=>this.state.needToAuth);
  }
  setNeedToAuth() {this.state.needToAuth=true}
}
