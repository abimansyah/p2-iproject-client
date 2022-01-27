<template>
  <div>
    <div>
      <div class="h-full bg-white">
        <div class="flex flex-col">
          <Navbar></Navbar>
        </div>

        <div class="min-w-full sm:px-6 lg:px-8">
          <!-- component -->
          <main class="md:px-20 sm:px-14 px-6">
            <div class="md:flex space-x-6">
              <!-- search -->

              <div class="pt-2 relative text-gray-600 pb-4">
                <input
                v-model="search.q"
                  class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search news.."
                />
                <button 
                @click.prevent="searchNews"
                type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                  <svg
                    class="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background: new 0 0 56.966 56.966"
                    xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                  </svg>
                </button>
              </div>
              <!-- card -->
              <!-- <NewsCard></NewsCard> -->
            </div>

            <section class=" pb-10 lg:pb-20">
              <div class="container">
                <div class="flex flex-wrap mx-4">

                  <NewsCard
                    v-for="oneNews in news.articles"
                    :key="oneNews.id"
                    :oneNews="oneNews"
                  ></NewsCard>

                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewsCard from "../components/NewsCard.vue";
export default {
  name: "NewsPage",
  components: {
    Navbar,
    NewsCard,
  },
  data(){
    return {
      search: {
        q:''
      }
    }
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  methods: {
    searchNews(){
      this.$store.dispatch('searchNews',this.search)
    },

    async getNews() {
      await this.$store.dispatch("getNews");
    },
  },
  created() {
    this.getNews();
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
