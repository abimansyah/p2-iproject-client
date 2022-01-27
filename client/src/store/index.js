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
    exchanges:[],
    news:[],
    coinDetails:[],
    watchlist:[],
    url: "http://localhost:3000",
    // url: "https://crypto8-iproject.herokuapp.com",
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
    },
    MUTATE_EXCHANGES(state, payload) {
      state.exchanges = payload
    },
    MUTATE_NEWS(state,payload) {
      state.news = payload
    },
    MUTATE_COIN_DETAILS(state, payload) {
      state.coinDetails = payload
    },
    MUTATE_WATCHLIST(state, payload){
      state.watchlist = payload
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
    },
    async getCoinById(context,payload) {
      try {
        const coins = await axios({
          method: "get",
          url: `${context.state.url}/cryptocurrencies/${payload}`
        })
        context.commit('MUTATE_COIN_DETAILS',coins.data)
      } catch (err) {
        console.log(err);
      }
    },
    async getExchanges(context, payload) {
      try {

        let parameters = {}

        const {orderBy, search, limit, offset, orderDirection} = req.query
        
        if(orderBy){
          parameters.orderBy = orderBy 
        }
        if(search){
          parameters.search = search
        }
        if(limit){
          parameters.limit = +limit
        }
        if(offset){
          parameters.offset = +offset
        }
        if(orderDirection){
          parameters.orderDirection = orderDirection
        }
        const exchanges = await axios({
          method: "get",
          url: `https://api.coinranking.com/v2/exchanges`,
          headers: {
            "x-access-token": `coinranking67ceb3740d22973212ae3bbcc229bc34a6452656205598b9`
          },
          params: parameters
        })

        context.commit('MUTATE_EXCHANGES',exchanges.data)
      } catch (err) {
        console.log(err);
      }
    },
    async getNews(context, payload) {
      try {
        const news = await axios({
          method: "get",
          url: `${context.state.url}/news`
        })
        context.commit('MUTATE_NEWS',news.data)
      } catch (err) {
        console.log(err);
      }
    },
    async postWatchlist(context, payload) {
      try {
        await axios({
          method: "post",
          url: `${context.state.url}/favorites/${payload}`,
          headers: { access_token: localStorage.getItem("access_token")}
        })
      } catch (err) {
        console.log(err);
      }
    },
    async getWatchlist(context, payload) {
      try {
        const res = await axios({
          method: "get",
          url: `${context.state.url}/favorites`,
          headers: { access_token: localStorage.getItem("access_token")}
        })
        context.commit('MUTATE_WATCHLIST', res.data)
      } catch (err) {
        console.log(err);
      }
    },
    async deleteWatchlist(context, payload) {
      try {
        await axios({
          method: "delete",
          url: `${context.state.url}/favorites/${payload}`,
          headers: { access_token: localStorage.getItem("access_token")}
        })
      } catch (err) {
        console.log(err);
      }
    },
    async filterCoin(context, payload) {
      try {
        const res = await axios({
          method: "get",
          url: `${context.state.url}/cryptocurrencies`,
          params: {
            search: payload.search,
            orderBy: payload.orderBy,
            orderDirection: payload.orderDirection
          },
        })
        context.commit('MUTATE_COINS',res.data)
      } catch (err) {
        console.log(err);
      }
    },
    async searchNews(context, payload) {
      try {
        const news = await axios({
          method: "get",
          url: `${context.state.url}/news`,
          params: {
            q: payload.q
          },
        })
        context.commit('MUTATE_NEWS',news.data)
      } catch (err) {
        console.log(err);
      }
    },
    async newsFrontPage(context,payload) {
      try {
        const news = await axios({
          method: "get",
          url: `${context.state.url}/news`,
          params: {
            pageSize: 3
          },
        })
        context.commit('MUTATE_NEWS',news.data)
      } catch (err) {
        console.log(err);
      }
    },
    async googleLogin(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${context.state.url}/login-google`,
          data: {
            token: payload.getAuthResponse().id_token,
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
    }

  },
  modules: {
  }
})
