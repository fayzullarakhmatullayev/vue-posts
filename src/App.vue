<template>
  <div class="container pb-2">
    <h1 class="my-4 text-center">JSON Placeholder Posts</h1>
    <div class="wrapper">
      <div class="posts-wrapper">
        <posts v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <pagination
        :postsLength="postLength"
        :currentPage="currentPage"
        :pageLimit="pageLimit"
        @clickPrevious="clickPrevious"
        @clickNext="clickNext"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";
import Posts from "./components/Posts.vue";

export default {
  name: "App",
  components: { Posts, Pagination },
  data() {
    return {
      currentPage: 0,
      pageLimit: 10,
    };
  },
  computed: {
    ...mapGetters(["posts", "postLength"]),
  },
  methods: {
    ...mapActions(["fetchPosts", "getPostsLength"]),
    async clickPrevious() {
      await this.fetchPosts({
        start: (this.currentPage -= 10),
        end: (this.pageLimit -= 10),
      });
    },
    async clickNext() {
      await this.fetchPosts({
        start: (this.currentPage += 10),
        end: (this.pageLimit += 10),
      });
    },
    async changePage(index) {
      await this.fetchPosts({
        start: (this.currentPage = index * 10),
        end: (this.pageLimit = index * 10 + 10),
      });
    },
  },
  async mounted() {
    await this.fetchPosts({
      start: this.currentPage,
      end: this.pageLimit,
    });
    await this.getPostsLength();
  },
};
</script>

<style scoped>
.posts-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 18%);
  justify-content: space-between;
  grid-gap: 2rem;
  margin-bottom: 2rem;
}
</style>
