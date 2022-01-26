<template>
  <div>
    <div class="h-screen bg-blue-500">
      <div class="flex flex-col">
        <Navbar></Navbar>

        <div class="flex-1 flex-row overflow-hidden">
          <div class="container mx-auto">
            <div class="">
              <div
                class="carousel relative container mx-auto"
                style="max-width: 1600px"
              >
                <div class="carousel-inner relative overflow-hidden w-full">
                  <!--Slide 1-->
                  <input
                    class="carousel-open"
                    type="radio"
                    id="carousel-1"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                    checked="checked"
                  />
                  <div
                    class="carousel-item absolute opacity-0"
                    style="height: 50vh"
                  >
                    <div
                      class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                      style="
                        background-image: url('https://crypto.snapi.dev/images/v1/p/j/bitcoin-id-4d4cad72-bb7a-40ec-9a8f-39c08a331e44-size900-102030.jpg');
                      "
                    >
                      <div class="container mx-auto">
                        <div
                          class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
                        >
                          <p class="text-black text-2xl my-4">
                            Stripy Zig Zag Jigsaw Pillow and Duvet Set
                          </p>
                          <a
                            class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                            href="#"
                            >view product</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    for="carousel-3"
                    class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
                    >‹</label
                  >
                  <label
                    for="carousel-2"
                    class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
                    >›</label
                  >

                  <!--Slide 2-->
                  <input
                    class="carousel-open"
                    type="radio"
                    id="carousel-2"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                  />
                  <div
                    class="carousel-item absolute opacity-0 bg-cover bg-right"
                    style="height: 50vh"
                  >
                    <div
                      class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                      style="
                        background-image: url('https://crypto.snapi.dev/images/v1/9/c/pna4gkwcivla7puft2u4gl4ktq-102031.jpg');
                      "
                    >
                      <div class="container mx-auto">
                        <div
                          class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
                        >
                          <p class="text-black text-2xl my-4">
                            Real Bamboo Wall Clock
                          </p>
                          <a
                            class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                            href="#"
                            >view product</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    for="carousel-1"
                    class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
                    >‹</label
                  >
                  <label
                    for="carousel-3"
                    class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
                    >›</label
                  >

                  <!--Slide 3-->
                  <input
                    class="carousel-open"
                    type="radio"
                    id="carousel-3"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                  />
                  <div
                    class="carousel-item absolute opacity-0"
                    style="height: 50vh"
                  >
                    <div
                      class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
                      style="
                        background-image: url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');
                      "
                    >
                      <div class="container mx-auto">
                        <div
                          class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
                        >
                          <p class="text-black text-2xl my-4">
                            Brown and blue hardbound book
                          </p>
                          <a
                            class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                            href="#"
                            >view product</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    for="carousel-2"
                    class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
                    >‹</label
                  >
                  <label
                    for="carousel-1"
                    class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
                    >›</label
                  >

                  <!-- Add additional indicators for each slide-->
                  <ol class="carousel-indicators">
                    <li class="inline-block mr-3">
                      <label
                        for="carousel-1"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                        >•</label
                      >
                    </li>
                    <li class="inline-block mr-3">
                      <label
                        for="carousel-2"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                        >•</label
                      >
                    </li>
                    <li class="inline-block mr-3">
                      <label
                        for="carousel-3"
                        class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                        >•</label
                      >
                    </li>
                  </ol>
                </div>
              </div>
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
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          
                          >price</div
                        >
                      </li>

                      <li class="">
                        <div
                          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      
                          >marketCap</div
                        >
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          >24hVolume</div
                        >
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                         
                          >change</div
                        >
                      </li>

                      <li class="">
                        <div
                          class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          >listedAt</div
                        >
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
                          
                          >ascending</div
                        >
                      </li>

                      <li class="">
                        <div
                          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          
                          >descending</div
                        >
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
                          
                        </tr>
                      </thead>

                      <!-- Tbody -->
                      <tbody>
                        <CoinTable
                        v-for="coin in coins.data.coins"
                        :key="coin.id"
                        :coin='coin'
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
import CoinTable from '../components/CoinTable.vue'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Navbar,
    CoinTable,
  },
  computed: {
    coins(){
      return this.$store.state.coins
    }
  },
  methods:{
    async getCoins() {
      await this.$store.dispatch('getCoin')
    }
  },
  created(){
    this.getCoins()
  }
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
