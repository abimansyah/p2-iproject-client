<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{coin.rank}}
    </td>

    <td
      @click.prevent="coinDetail(coin.coinId)"
      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer"
    >
      <span class=""><img :src="coin.iconUrl" alt="" style="width: 30px; height: auto; object-fit: cover;"></span>
    <span class="text-sm text-gray-600 font-bold">{{coin.name}}</span>
    <span class="pl-4">{{coin.symbol}}</span>
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <div :class="color">
        {{coin.change}}
      </div>
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin.price)
      }}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <div class="color">
        {{Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.coin['24hVolume'])}}
      </div>
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{coin.btcPrice}}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <div @click.prevent="removeWatchlist(coin.id)" class="cursor-pointer">
       <i class="far fa-trash-alt"></i> 
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "FavoriteTable",
  props:['coin'],
  data() {
    return {
      isClicked: false
    }
  },
  computed:{
    color() {
      return Number(this.coin.change) > 0 ? 'inc': 'desc'
    }
  },
  methods: {
    coinDetail(coinId){
      this.$router.push(`/cryptocurrency/${coinId}`)
      this.$store.dispatch('getCoinById',coinId)
    },
    getWatchList(){
      this.$store.dispatch('getWatchlist')
    },

    async removeWatchlist(uuid) {
    await this.$store.dispatch('deleteWatchlist',uuid)
    this.getWatchList()
    }
  },
  created(){
    this.$store.dispatch('getWatchlist')
  }
};
</script>

<style></style>
