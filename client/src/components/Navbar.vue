<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700 mb-4"
  >
    <div
      class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0"
    >
    <!-- Left -->
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
        <span class="font-semibold text-xl tracking-tight">My Navbar</span>
      </div>
      <div class="block lg:hidden">
        <button
          id="nav"
          class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
    >
    <!-- Middle -->
      <div class="text-md font-bold text-blue-700 lg:flex-grow">
        <div
          @click="toHomePage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Home
        </div>
        <div
        @click="toNewsPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          News
        </div>
        <div
          v-if="loggedIn" 
          @click="toWatchlistPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Watchlist
        </div>
      </div>
      <!-- This is an example component -->
      <div class="flex">
        <div
           v-if="loggedIn" 
           @click="logout"
          class="block text-md py-2 rounded text-blue-700 ml-2 mr-4 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >Sign Out</div
        >

        <div
          v-if="!loggedIn" 
          @click="toLoginPage"
          class="block text-md ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >Login</div>
        <div
          v-if="!loggedIn" 
          @click="toRegisterPage"
          class="block text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >Register</div>
      </div>
      
      <!-- Right -->
      
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed:{
    loggedIn(){
      return this.$store.state.loggedIn
    }
  },
  methods: {
    toLoginPage(){
      this.$router.push('/login')
    },
    toRegisterPage(){
      this.$router.push('/register')
    },
    toHomePage(){
      this.$router.push('/')
    },
    toExchangesPage(){
      this.$router.push('/exchange')
    },
    toWatchlistPage(){
      this.$router.push('/favorite')
    },
    toNewsPage(){
      this.$router.push('/news')
    },
    logout(){
      localStorage.clear()
      this.$store.commit('MUTATE_LOGIN', false)
      this.$router.push('/')
    },


  },
  created(){
    if(localStorage.access_token){
      this.$store.commit('MUTATE_LOGIN',true)
    }
  }
};
</script>

<style></style>
