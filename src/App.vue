<template>
  <div class="container pb-2">
    <h1 class="my-4 text-center">JSON Placeholder Posts</h1>
    <div class="wrapper">
      <div class="posts-wrapper">
        <posts v-for="post in currentPost" :key="post.id" :post="post" />
      </div>
      <pagination
        @paginate="paginate"
        :totlaPosts="posts.length"
        :postPerPage="postPerPage"
        :currentPage="currentPage"
        @prev="prev"
        @next="next"
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
      currentPage: 1,
      postPerPage: 10,
    };
  },
  computed: {
    ...mapGetters(["posts"]),
    indexOfLastPost() {
      return this.currentPage * this.postPerPage;
    },
    indexOfFirstPost() {
      return this.indexOfLastPost - this.postPerPage;
    },
    currentPost() {
      return this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
    },
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    paginate(number) {
      this.currentPage = number;
    },
    prev() {
      this.currentPage--;
    },
    next() {
      this.currentPage++;
    },
  },
  mounted() {
    this.fetchPosts();
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
