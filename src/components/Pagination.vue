<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="number in pageNumbers"
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
  mounted() {
    for (let i = 1; i <= Math.ceil(this.totlaPosts / this.postPerPage); i++) {
      this.pageNumbers.push(i);
    }
  },
};
</script>

<style></style>
