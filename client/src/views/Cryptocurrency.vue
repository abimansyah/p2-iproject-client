<template>
<div class="flex-row w-full h-full">

    <!-- NAV BAR -->
    <Navbar></Navbar>

    <!-- PRODUCT DETAIL -->
    <div class="flex justify-center mt-16  w-full lg:w-full">
      <!-- Left -->
      <div
        class="flex justify-center items-center rounded-l-lg "
        style="width: 25vw"
      >
        <img
          class="h-96 w-full rounded-l-lg"
          :src="coin.iconUrl"
          alt=""
        />
      </div>
      <!-- Middle -->
      <div
        class="flex-row border-l-2 border-t-2 border-b-2 border-gray-400 p-10 bg-white relative"
        style="width: 25vw"
      >
        <div class="text-left text-2xl font-bold pb-3">{{coin.name}}</div>

        <div class="text-left pb-3 ">{{coin.symbol}}</div>

        <div class="text-left pb-3 text-4xl">
          <div :class="color">{{coin.change}}</div>
        </div>

        <div class="text-left pb-3">{{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin.price)
      }}</div>

        <div class="text-left pb-3">{{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin['24hVolume'])}}</div>


        <div class="text-left pb-3 cursor-pointer">  
          <a :href="coin.coinrankingUrl">See Details</a>
        </div>

        
      </div>
      <!-- RIGHT -->
      <div class="flex-row border-t-2 border-r-2 border-b-2 border-gray-400 p-10 rounded-r-lg bg-white"
        style="width: 20vw">
        <div class="text-4xl">
            {{Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
              }).format(this.coin.price)
            }}
        </div>

        <div>
          {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin.marketCap)}}
        </div>

        <div>
          pppppp
        </div>
        
      </div>
    </div>

  </div>

  
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Cryptocurrency',
  components: {
    Navbar
  },
  methods:{
    getCoinById(){
    this.$store.dispatch('getCoinById',this.$route.params.uuid)
    }
  },
  computed:{
    color() {
      return Number(this.coin.change) > 0 ? 'inc': 'desc'
    },
    coin(){
      return this.$store.state.coinDetails
    }
  },
  created(){
    this.getCoinById()
  }
  
}
</script>

<style>
.inc{
  color: green
}
.desc{
  color: red
}
</style>