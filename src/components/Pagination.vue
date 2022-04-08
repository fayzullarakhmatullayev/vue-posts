<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="number in getPageNumner"
        :key="number"
        :class="{ active: number === currentPage }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('paginate', number)"
          >{{ number }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["totlaPosts", "postPerPage", "currentPage"],
  data() {
    return {
      pageNumbers: [],
    };
  },
  computed: {
    getPageNumner() {
      for (let i = 1; i <= Math.ceil(this.totlaPosts / this.postPerPage); i++) {
        this.pageNumbers.push(i);
      }
      return this.pageNumbers;
    },
  },
};
</script>

<style></style>
