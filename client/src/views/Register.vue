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
            <h1 class="text-3xl text-center font-thin">Register</h1>
            <div class="w-full mt-4">
              <div class="form-horizontal w-3/4 mx-auto">

                <div class="flex flex-col mt-4">
                  <input
                    type="text"
                    class="flex-grow h-10 px-2 border rounded border-grey-400 hover:border-gray-500 focus:border-gray-500 transition delay-50 duration-300 ease-in-out cursor-default text-sm"
                    placeholder="Username"
                  />
                </div>

                <div class="flex flex-col mt-4">
                  <input
                    id="email"
                    type="text"
                    class="flex-grow h-10 px-2 border rounded border-grey-400 hover:border-gray-500 focus:border-gray-500 transition delay-50 duration-300 ease-in-out cursor-default text-sm"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div class="flex flex-col mt-4">
                  <input
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
                    Create an Account
                  </button>
                </div>

                <div class="text-center mt-4">
                  <p class="text-blue-dark text-xs cursor-default">OR</p>
                </div>

                <div class="text-center mt-4">
                  <p class="text-blue-dark text-xs cursor-default">
                    Already Have an Account?
                    <span class="hover:text-blue-600 cursor-pointer"
                      >Log In</span
                    >
                  </p>
                </div>

              </div>
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
          <img src="../assets/Crypto8-logos_white.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style></style>
