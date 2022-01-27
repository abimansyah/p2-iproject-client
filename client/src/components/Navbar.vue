<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-blue-600 py-4 lg:px-12 shadow border-solid mb-4 "
  >
    <div
      class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0"
    >
    <!-- Left -->
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-16 cursor-pointer">
        <span 
        @click="toHomePage"
        class="font-semibold text-xl tracking-tight">
          <img src="../assets/Crypto8-logos_white.png" alt="" style="width: 300px; height: 50px; object-fit:cover;">
        </span>
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
      <div class="text-md lg:flex-grow">
        <div
          @click="toHomePage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
        >
          Home
        </div>
        <div
        @click="toNewsPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
        >
          News
        </div>
        <div
          v-if="loggedIn" 
          @click="toWatchlistPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
        >
          Watchlist
        </div>
      </div>
      <!-- This is an example component -->
      <div class="flex">
        <div
           v-if="loggedIn" 
           @click="logout"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
          >Sign Out</div
        >

        <div
          v-if="!loggedIn" 
          @click="toLoginPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
          >Login
        </div>
          
        <div
          v-if="!loggedIn" 
          @click="toRegisterPage"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 font-bold text-white cursor-pointer"
          >Register
        </div>

      </div>
      
      <!-- Right -->
      
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Navbar",
  components: {
    Swal
  },
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
      Swal.fire({
          icon: "success",
          text: "You've Logged Out",
          showConfirmButton: false,
          timer: 1000,
          position: 'top-end',
        });
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
