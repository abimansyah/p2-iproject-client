<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{coin.rank}}
    </td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {{coin.name}}
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
  </tr>
</template>

<script>
export default {
  name: "CoinTable",
  props:['coin'],
  computed:{
    color() {
      return Number(this.coin.change) > 0 ? 'inc': 'desc'
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
