import { loginByUserName, logout ,getUserInfo} from "../../api/login";
import {compileStr, getToken, setToken, uncomileStr} from "../../utils/auth";

const user = {
  state: {
    user: {
      user: '',
      token: getToken(),
      name: '',
      roles: [],
      usedOld: false
    }
  },

  mutations: {
    SET_TOKEN:(state, token) => {
      state.token = token
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_FLAG: (state, flag) => {
      state.usedOld = flag;
    }
  },

  actions: {
    // 用戶名登錄
    LoginByUsername({ commit }, usrInfo) {
      const username = usrInfo.username.trim();
      return new Promise((resolve, reject) => {
        // alert("enter Promise.js")
        loginByUserName(username, usrInfo.password).then((response) => {
          alert("after response");
          localStorage.setItem('user', username || '');
          const data = response.data;
          if (data.err === 0) {
            setToken(200);
            commit('SET_TOKEN', 200);
            commit('SET_NAME', username);
            let roleArr = data.data;
            if (roleArr && Array.isArray(roleArr) && roleArr.length > 0) {
              let final = [];
              roleArr.forEach(item => {
                final.push(item.Name);
              });
              commit('SET_ROLES', final);
              localStorage.setItem('routers', compileStr(final.join('-')));
            }
          } else {
              if (response.status === 200) {
                setToken(200);
                commit('SET_NAME', username);
                // restore the router
                let routers = localStorage.getItem('routers') || '';
                routers = uncomileStr(routers);
                let roles = routers.split('-');
                commit('SET_ROLES', roles);
                commit('SET_FLAG', true);
              } else {

              }
              resolve();
          }
        }).catch(err => {
            reject(err);
        });
      });
    }
  }
}

export default user
