import { defineStore } from 'pinia';

// import { AdminInfo, Login } from '@/api/admin';
import type { UserInfo } from '@/types/interface';
// import { SHA256 } from '@/utils/crypto';

const InitUserInfo: UserInfo = {
  name: '', // 用户名，用于展示在页面右上角头像处
  roles: [], // 前端权限模型使用 如果使用请配置modules/permission-fe.ts使用
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: 'main_token', // 默认token不走权限
    userInfo: { ...InitUserInfo },
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles;
    },
  },
  actions: {
    async login(userInfo: Record<string, string>) {
      let { password } = userInfo;
      // password = await SHA256(password);
      // const res = await Login({
      //   account: userInfo.account,
      //   password,
      // });
      // if (res.code === 200) {
      //   this.token = res.data;
      // } else {
      //   throw res;
      // }
    },
    async getUserInfo() {
      // const res = await AdminInfo();
      // res.permissions = res.permissions ? res.permissions : [];
      // this.userInfo = res;
    },
    async logout() {
      this.token = '';
      this.userInfo = { ...InitUserInfo };
    },
  },
});
