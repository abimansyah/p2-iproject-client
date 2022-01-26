<template>
  <div>
    <div class="h-full bg-blue-200">
      <div class="flex flex-col">
        <Navbar></Navbar>

        <div class="flex-1 flex-row overflow-hidden">
          <div class="container mx-auto">
            <div class="text-left">Top Cryptocurrency Spot Exchanges</div>

            <form action="">
              <div class="flex flex-row justify-between mt-2 mb-2">
                <!-- order By(price, 24hvol, dll) -->
                <div>
                  <div class="dropdown inline-block relative">
                    <div
                      class="bg-gray-300 text-gray-700 text-sm py-2 px-4 rounded inline-flex items-center h-10 w-72"
                    >
                      <span class="mr-1">Order by</span>
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                    <ul
                      class="dropdown-menu absolute hidden text-gray-700 pt-1 w-72 text-sm"
                    >
                      <li class="">
                        <div
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          price
                        </div>
                      </li>

                      <li class="">
                        <div
                          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          marketCap
                        </div>
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          24hVolume
                        </div>
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          change
                        </div>
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          listedAt
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <!--  order Direction -->
                <div>
                  <div class="dropdown inline-block relative">
                    <div
                      class="bg-gray-300 text-gray-700 text-sm py-2 px-4 rounded inline-flex items-center h-10 w-72"
                    >
                      <span class="mr-1">Order Direction</span>
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                    <ul
                      class="dropdown-menu absolute hidden text-gray-700 pt-1 w-72 text-sm"
                    >
                      <li class="">
                        <div
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          ascending
                        </div>
                      </li>

                      <li class="">
                        <div
                          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          descending
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- search -->
                <div class="bg-gray-200 rounded-lg">
                  <div class="container flex justify-center items-center">
                    <div class="relative">
                      <input
                        type="text"
                        class="h-10 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                        placeholder="Search coins..."
                      />
                      <div class="absolute top-[10px] right-3 cursor-pointer">
                        <i
                          class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <!-- TABLE -->

            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-x-auto">
                    <!--Table  -->
                    <table class="min-w-full">
                      <!-- Thead -->
                      <thead class="border-b text-center">
                        <tr>
                          <!-- # rank -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            #
                          </th>

                          <!-- name -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            name
                          </th>

                          <!-- 24hVolume -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            24hVolume
                          </th>

                          <!-- marketShare -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            marketShare
                          </th>

                          <!-- numberOfMarkets -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            numberOfMarkets
                          </th>
                        </tr>
                      </thead>

                      <!-- Tbody -->
                      <tbody>
                        <ExchangeTable
                        v-for="exchange in exchanges"
                        :key="exchange.id"
                        :exchange='exchange'
                        ></ExchangeTable>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-500">uuuuu</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ExchangeTable from '../components/ExchangeTable.vue'
export default {
  name: "Exchange",
  components: {
    Navbar,
    ExchangeTable
  },
  computed: {
    exchanges() {
      return this.$store.state.exchanges;
    },
  },
  methods: {
    async getExchanges() {
      await this.$store.dispatch("getExchanges");
    },
  },
  created() {
    this.getExchanges();
  },
};
</script>

<style></style>
