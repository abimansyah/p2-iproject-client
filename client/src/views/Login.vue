<template>
  <div class="bg-blue-600 h-screen w-screen">
    <div
      class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
    >
      <div
        class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style="height: 500px"
      >
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">

            <h1 class="text-3xl text-center font-thin">Welcome Back</h1>
            <div class="w-full mt-4">
              <form 
              @submit.prevent="login"
              class="form-horizontal w-3/4 mx-auto">

                <div class="flex flex-col mt-4">
                  <input
                  v-model="dataLogin.email"
                    id="email"
                    type="text"
                    class="flex-grow h-10 px-2 border rounded border-grey-400 hover:border-gray-500 focus:border-gray-500 transition delay-50 duration-300 ease-in-out cursor-default text-sm"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div class="flex flex-col mt-4">
                  <input
                    v-model="dataLogin.password"
                    id="password"
                    type="password"
                    class="flex-grow h-10 px-2 rounded border border-grey-400 hover:border-gray-500 focus:border-gray-500 transition delay-50 duration-300 ease-in-out cursor-default text-sm"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>

                <div class="flex flex-col mt-4">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition delay-50 duration-300 ease-in-out"
                  >
                    Login
                  </button>
                </div>

                <div class="text-center mt-4">
                  <p
                    class="text-blue-dark text-xs cursor-default"
                  >
                    OR
                  </p>
                </div>

                <div class="flex flex-col mt-4">
                  <button
                    class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded hover:border-gray-500 focus:border-gray-500 transition delay-50 duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="w-4 h-4 mr-2"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="b">
                        <use xlink:href="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      /></svg
                    >Login with Google
                  </button>
                </div>

                <div class="text-center mt-6">
                  <p class="text-blue-dark text-xs cursor-default">Don't Have an Account? <span class="hover:text-blue-600 cursor-pointer" @click="toRegisterPage">Sign Up</span></p>
                </div>

                <div 
                @click="toHomePage"
                class="text-center mt-6 text-blue-dark text-sm hover:text-blue-600 cursor-pointer">
                  Return to Home
                </div>

              </form>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block md:w-1/2 rounded-r-lg"
          
          style="
            background: url('https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=ss80');
            background-size: cover;
            background-position: center center;
          "
        >
        <img src="../assets/Crypto8-logos_white.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import{mapActions} from 'vuex'

export default {
  name: "Login",
  data(){
    return{
      dataLogin: {
        email: '',
        password: ''
      }

    }
  },
  methods: {
    // ...mapActions(['postLogin']),

    toHomePage() {
      this.$router.push('/');
    },
    toRegisterPage() {
      this.$router.push('/register');
    },
    async login() {
      await this.$store.dispatch('postLogin',{
        email:this.dataLogin.email,
        password:this.dataLogin.password
      })
      if (localStorage.getItem("access_token")) {
        this.$router.push('/')
      }    
    },

    
  }
};
</script>

<style></style>
