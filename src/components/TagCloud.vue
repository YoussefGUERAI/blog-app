<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-if="tags.length">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="`/tags/${tag}`"
        class="tag-link"
      >
        {{ tag }}
      </router-link>
    </div>
    <p v-else>No tags available.</p>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.tag-link {
  margin-right: 8px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
