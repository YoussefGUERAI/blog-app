<template>
    <div class="tag-view">
      <h2>Posts tagged with "{{ tag }}"</h2>
      
      <div v-if="filteredPosts.length">
        <div v-for="post in filteredPosts" :key="post.id" class="post-preview">
          <h3>
            <router-link :to="`/datail/${post.id}`">{{ post.title }}</router-link>
          </h3>
          <p><strong>Tags:</strong> {{ post.tags.join(', ') }}</p>
          <p>{{ post.body.slice(0, 50) }}...</p>
        </div>
      </div>
  
      
  
      
      <TagCloud />
    </div>
  </template>
  
  <script>
  import TagCloud from '../components/TagCloud.vue';
  
  export default {
    components: { TagCloud },
    data() {
      return {
        posts: [],
        tag: this.$route.params.tag
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(post =>
          Array.isArray(post.tags) && post.tags.includes(this.tag)
        );
      }
    },
    async created() {
      try {
        const response = await fetch('http://localhost:3000/posts');
        this.posts = await response.json();
      } catch (error) {
        console.error("Failed to load posts for tag:", error);
      }
    },
    watch: {
      '$route.params.tag'(newTag) {
        this.tag = newTag;
      }
    }
  };
  </script>
  
  <style scoped>
  .post-preview {
    margin-bottom: 20px;
  }
  </style>
  