<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" @click.prevent="$emit('prev')"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="number in lastPage"
        :key="number"
        :class="{ active: currentPage === number }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('paginate', number)"
          >{{ number }}</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click.prevent="$emit('next')">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ["prev", "next", "paginate"],
  props: ["lastPage", "currentPage"],
};
</script>

<style></style>
