import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    postLength: null,
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    postLength(state) {
      return state.postLength;
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_POST_LENGTH(state, postLength) {
      state.postLength = postLength;
    },
  },
  actions: {
    async fetchPosts({ commit, state }, { start, end }) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/posts?_start=${start}&&_end=${end}`
        );
        commit("SET_POSTS", data);
      } catch (e) {
        console.error(e.message);
      }
    },
    async getPostsLength({ commit }) {
      try {
        const { data } = await axios.get(`http://localhost:3000/posts`);
        commit("SET_POST_LENGTH", data.length);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
});
