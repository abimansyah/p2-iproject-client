<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{coin.rank}}
    </td>

    <td 
    @click.prevent='coinDetail(coin.uuid)'
    class="text-sm text-gray-600 px-6 py-4 whitespace-nowrap cursor-pointer">
    <span class=""><img :src="coin.iconUrl" alt="" style="width: 30px; height: auto; object-fit: cover;"></span>
    <span class="text-sm text-gray-600 font-bold">{{coin.name}}</span>
    <span class="pl-4">{{coin.symbol}}</span>
    
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin.marketCap)}}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin.price)
      }}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
      <div :class="color">{{coin.change}}</div>
      
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin['24hVolume'])}}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{coin.btcPrice}}
    </td>

    <td 
    v-if="loggedIn"
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <div
      @click="addToWatchlist(coin.uuid)"
      >
        <i 
        :style="isClicked ? {color:'rgb(221, 173, 15)' } : null" @click="toggleIsClicked"
        class="fas fa-star cursor-pointer"></i>
      </div>
    </td>

  </tr>
</template>

<script>
export default {
  name: "CoinTable",
  props:['coin'],
  data() {
    return {
      isClicked: false
    }
  },
  computed:{
    color() {
      return Number(this.coin.change) > 0 ? 'inc': 'desc'
    },
    loggedIn(){
      return this.$store.state.loggedIn
    }
  },
  methods: {
    toggleIsClicked() {
    this.isClicked = !this.isClicked
  },
  coinDetail(uuid){
    this.$router.push(`/cryptocurrency/${uuid}`)
    this.$store.dispatch('getCoinById',uuid)
  },
  async addToWatchlist(uuid) {
    await this.$store.dispatch('postWatchlist',uuid)
    }
  },
  created(){
    this.$store.dispatch('getWatchlist')
    if(localStorage.access_token){
      this.$store.commit('MUTATE_LOGIN',true)
    }
  }
};
</script>

<style>
.inc{
  color: green
}
.desc{
  color: red
}


</style>
