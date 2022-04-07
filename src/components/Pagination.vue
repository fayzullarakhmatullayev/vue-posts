<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage <= 0 }">
        <a class="page-link" href="#" @click.prevent="$emit('clickPrevious')"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="(post, index) in postsLength / 10"
        :key="post"
        :class="{ active: currentPage === index * 10 }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('changePage', index)"
          >{{ index + 1 }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: postsLength === pageLimit }">
        <a class="page-link" href="#" @click.prevent="$emit('clickNext')"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    postsLength: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
    pageLimit: {
      type: Number,
    },
  },
  emits: ["clickPrevious", "clickNext", "changePage"],
};
</script>

<style></style>
