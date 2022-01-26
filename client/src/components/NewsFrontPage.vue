<template>
  <div class="pr-4 pl-4 w-[33vw]">
    <a
      :href="oneNews.url"
      class="h-64 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
    >
      <img
        class="object-none w-full h-64 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
        :src="oneNews.urlToImage"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{oneNews.title}}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
          {{oneNews.description}}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NewsFrontPage",
  props: ['oneNews']
};
</script>

<style></style>
