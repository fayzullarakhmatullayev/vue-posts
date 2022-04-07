<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ post.id }}
        {{
          post.title.length > 15
            ? post.title.substring(0, 15) + "..."
            : post.title
        }}
      </h5>
      <p class="card-text">
        {{
          post.body.length > 150
            ? post.body.substring(0, 150) + "..."
            : post.body
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
