<template>
    <div class="post-detail">
      <h2>{{ post.title }}</h2>
      
      <p>{{ post.body }}</p>
  
      <!-- Include the TagCloud component -->
      <TagCloud :tags="post.tags" />
    </div>
  </template>
  
  <script>
  import TagCloud from '../components/TagCloud.vue';
  
  export default {
    components: {
      TagCloud
    },
    data() {
      return {
        post: {
          title: '',
          body: '',
          tags: ''
        }
      };
    },
    async created() {
      const postId = this.$route.params.id;
  
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        if (!response.ok) throw new Error("Failed to fetch post");
  
        this.post = await response.json();
      } catch (error) {
        console.error("Error loading post:", error);
      }
    }
  };
  </script>
  
  <style scoped>
  .post-detail {
    padding: 1rem;
  }
  </style>
  