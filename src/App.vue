<template>
  <div class="container pb-2">
    <h1 class="my-4 text-center">JSON Placeholder Posts</h1>
    <div class="wrapper">
      <div class="posts-wrapper">
        <posts v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <pagination
        @prev="prev"
        @next="next"
        @paginate="paginate"
        :lastPage="lastPage"
        :currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Pagination from "./components/Pagination.vue";
import Posts from "./components/Posts.vue";

export default {
  name: "App",
  components: { Posts, Pagination },
  data() {
    return {
      currentPage: 1,
      postPerPage: 5,
    };
  },
  computed: {
    ...mapGetters(["posts", "headersLink"]),
    lastPage() {
      if (this.headersLink.last) {
        return +this.headersLink.last.split("_page=")[1].match(/^\d*/)[0];
      }
    },
    prevPage() {
      if (this.headersLink.prev) {
        return +this.headersLink.prev.split("_page=")[1].match(/^\d*/)[0];
      }
    },
    nextPage() {
      if (this.headersLink.next) {
        return +this.headersLink.next.split("_page=")[1].match(/^\d*/)[0];
      }
    },
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    ...mapMutations(["SET_HEADERS_LINK"]),
    prev() {
      if (this.prevPage > 0) {
        this.currentPage = this.prevPage;
        this.fetchPosts({
          limit: this.postPerPage,
          page: this.currentPage,
        });
      }
    },
    next() {
      if (this.nextPage <= this.lastPage) {
        this.currentPage = this.nextPage;
        this.fetchPosts({
          limit: this.postPerPage,
          page: this.currentPage,
        });
      }
    },
    paginate(number) {
      this.currentPage = number;
      this.fetchPosts({
        limit: this.postPerPage,
        page: this.currentPage,
      });
    },
  },
  mounted() {
    this.fetchPosts({
      limit: this.postPerPage,
      page: this.currentPage,
    });
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
