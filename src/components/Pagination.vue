<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="$emit('prev')"
          >Previous</a
        >
      </li>
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
      <li
        class="page-item"
        :class="{ disabled: currentPage + 1 > pageNumbers.length }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('next')">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["totlaPosts", "postPerPage", "currentPage"],
  emits: ["prev", "next", "paginate"],
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
