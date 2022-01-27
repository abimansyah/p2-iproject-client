<template>
  <div>
    <Navbar></Navbar>
    <div class="flex flex-col">
      <div class="flex-1 flex-row overflow-hidden">
        <div class="container mx-auto">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <!--Table  -->
            <table class="min-w-full">
              <!-- Thead -->
              <thead class="border-b text-center">
                <tr>
                  <!-- # number -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray px-6 py-4"
                  >
                    #
                  </th>

                  <!-- name -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Coin Name
                  </th>

                  <!-- change -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900  px-6 py-4"
                  >
                    Change
                  </th>

                  <!-- price -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900  px-6 py-4"
                  >
                    Price
                  </th>


                  <!-- 24hvolume -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900  px-6 py-4"
                  >
                    24hVolume
                  </th>

                  <!-- BTCPrice -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900  px-6 py-4"
                  >
                    Btc Price
                  </th>

                  <!-- Watchlist -->
                  <th
                    scope="col"
                    class="text-sm font-bold text-gray-900  px-6 py-4"
                  >
                    Remove
                  </th>
                </tr>
              </thead>

              <!-- Tbody -->
              <tbody>
                <FavoriteTable
                v-for="coin in watchlists"
                :key="coin.id"
                :coin='coin'
                ></FavoriteTable>
              </tbody>
            </table>
          </div>
        </div>
      </div>

        </div>
      </div>


      
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FavoriteTable from "../components/FavoriteTable.vue";

export default {
  name: "Favorite",
  components: {
    Navbar,
    FavoriteTable,
  },
  methods: {
    
  },
  computed: {
    
    watchlists(){
      return this.$store.state.watchlist
    }
  },
  created(){
    this.$store.dispatch('getWatchlist')
  }
};
</script>

<style></style>
