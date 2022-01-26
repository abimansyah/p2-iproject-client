<template>
  <div>
    <div class="h-full bg-blue-200">
      <div class="flex flex-col">
        <Navbar></Navbar>

        <div class="flex-1 flex-row overflow-hidden">
          <div class="container mx-auto ">
            <div class="flex flex-row justify-between">
              <NewsFrontPage
              v-for="oneNews in news.articles"
              :key='oneNews.id'
              :oneNews="oneNews"
              >
              </NewsFrontPage>
            </div>

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
                          @click="sortByPrice"
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          price
                        </div>
                      </li>

                      <li class="">
                        <div
                          @click="sortByMarketCap"
                          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          marketCap
                        </div>
                      </li>

                      <li class="">
                        <div
                          @click="sortByDailyVolume"
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          24hVolume
                        </div>
                      </li>

                      <li class="">
                        <div
                          @click="sortByChange"
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          change
                        </div>
                      </li>

                      <li class="">
                        <div
                          @click="sortByListedAt"
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
                          @click.prevent="toAscend"
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        >
                          ascending
                        </div>
                      </li>

                      <li class="">
                        <div
                          @click.prevent="toDescend"
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
                        v-model="filter.search"
                        type="text"
                        class="h-10 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                        placeholder="Search coins..."
                      />
                      <button
                        @click.prevent="searchCoin"
                        class="absolute top-[10px] right-3 cursor-pointer"
                      >
                        <i
                          class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                        ></i>
                      </button>
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
                          <!-- # number -->
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

                          <!-- marketCap -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            marketCap
                          </th>

                          <!-- price -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            price
                          </th>

                          <!-- change -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            change
                          </th>

                          <!-- 24hvolume -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            24hVolume
                          </th>

                          <!-- BTCPrice -->
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            Btc Price
                          </th>

                          <!-- Watchlist -->
                          <th
                            v-if="loggedIn"
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            Watchlist
                          </th>
                        </tr>
                      </thead>

                      <!-- Tbody -->
                      <tbody>
                        <CoinTable
                          v-for="coin in coins.data.coins"
                          :key="coin.id"
                          :coin="coin"
                        ></CoinTable>
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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbar.vue";
import CoinTable from "../components/CoinTable.vue";
import NewsFrontPage from '../components/NewsFrontPage.vue'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Navbar,
    CoinTable,
    NewsFrontPage
  },
  data() {
    return {
      filter: {
        search: "",
        orderBy: "",
        orderDirection: "",
      },
    };
  },
  computed: {
    news(){
      return this.$store.state.news
    },
    coins() {
      return this.$store.state.coins;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    searchCoin() {
      this.$store.dispatch("filterCoin", this.filter);
    },
    toAscend() {
      this.filter.orderDirection = "asc";
      this.$store.dispatch("filterCoin", this.filter);
    },
    toDescend() {
      this.filter.orderDirection = "desc";
      this.$store.dispatch("filterCoin", this.filter);
    },
    sortByPrice() {
      this.filter.orderBy = "price";
      this.$store.dispatch("filterCoin", this.filter);
    },
    sortByMarketCap() {
      this.filter.orderBy = "marketCap";
      this.$store.dispatch("filterCoin", this.filter);
    },
    sortByDailyVolume() {
      this.filter.orderBy = "24hVolume";
      this.$store.dispatch("filterCoin", this.filter);
    },
    sortByChange() {
      this.filter.orderBy = "change";
      this.$store.dispatch("filterCoin", this.filter);
    },
    sortByListedAt() {
      this.filter.orderBy = "listedAt";
      this.$store.dispatch("filterCoin", this.filter);
    },
    async getCoins() {
      await this.$store.dispatch("getCoin");
    },
    async newsFrontPage() {
      await this.$store.dispatch('newsFrontPage')
    }
  },
  created() {
    this.newsFrontPage()
    this.getCoins();

    if (localStorage.access_token) {
      this.$store.commit("MUTATE_LOGIN", true);
    }
  },
};
</script>

<style>
html,
body,
p,
div,
li {
  font-family: Arial, Helvetica, sans-serif;
}

.left-full {
  left: -100%;
}

h2 {
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 0 20px;
}

h1 {
  font-weight: bold;
  /* color: #128c73; */
  font-size: 20px;
  margin: 10px 0 20px 20px;
}
.my_slide {
  margin: 0 0 0 20px;
}
.my_slide:last-child {
  margin: 0;
}
.my_slide img {
  width: inherit;
  border-radius: 10px;
}
.slick-dots {
  bottom: -25px;
}
.my_slide span {
  margin-top: 10px;
  display: block;
}

.work-sans {
  font-family: "Work Sans", sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
