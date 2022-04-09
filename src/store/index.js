import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    headersLink: {},
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    headersLink(state) {
      return state.headersLink;
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_HEADERS_LINK(state, headersLink) {
      const linkHeadersArray = headersLink
        .split(", ")
        .map((header) => header.split("; "));
      const linkHeadersMap = linkHeadersArray.map((header) => {
        const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
        const thisHeaderUrl = header[0].slice(1, -1);
        return [thisHeaderRel, thisHeaderUrl];
      });
      state.headersLink = Object.fromEntries(linkHeadersMap);
    },
  },
  actions: {
    async fetchPosts({ commit }, { limit, page }) {
      try {
        const { data, headers } = await axios.get(
          `http://localhost:3000/posts?_limit=${limit}&_page=${page}`
        );
        commit("SET_HEADERS_LINK", headers.link);
        commit("SET_POSTS", data);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
});
