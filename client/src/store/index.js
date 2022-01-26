import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from "sweetalert2";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    registered:false,
    coins:[],
    url: "http://localhost:3000",
  },
  mutations: {
    MUTATE_LOGIN(state, payload) {
      state.loggedIn = payload;
    },
    MUTATE_REGISTER(state, payload){
      state.registered = payload
    },
    MUTATE_COINS(state, payload) {
      state.coins = payload
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
    async postRegister(context, payload) {
      try {
        await axios({
          method: "post",
          url: `${context.state.url}/register`,
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
          },
        });
        context.commit('MUTATE_REGISTER',true)

        // Swal.fire({
        //   icon: "success",
        //   text: "Register Successfull",
        // });
      } catch (err) {

        context.commit('MUTATE_REGISTER',false)
        // console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   text: err.response.data.message,
        // });
      }
    },
    async getCoin(context,payload) {
      try {
        const coins = await axios({
          method: "get",
          url: `${context.state.url}/cryptocurrencies`
        })
        context.commit('MUTATE_COINS',coins.data)
      } catch (err) {
        console.log(err);
      }
    }

  },
  modules: {
  }
})
