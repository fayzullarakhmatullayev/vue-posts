import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get(`http://localhost:3000/posts`);
        commit("SET_POSTS", data);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
});
