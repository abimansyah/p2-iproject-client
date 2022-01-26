import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from "sweetalert2";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    registered:false,
    url: "http://localhost:3000",
  },
  mutations: {
    MUTATE_LOGIN(state, payload) {
      state.loggedIn = payload;
    },
    MUTATE_REGISTER(state, payload){
      state.registered = payload
    }
  },
  actions: {
    async postLogin(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${context.state.url}/login`,
          data: {
            email: payload.email,
            password: payload.password,
          },
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("MUTATE_LOGIN", true);
        
        Swal.fire({
          icon: "success",
          text: "Sign In Successfull",
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
  },
  modules: {
  }
})
