<template>
  <div>
    <h2>Add a New Post</h2>
    <form @submit.prevent="addPost">
      <input v-model="post.title" placeholder="Post Title" required />
      <input v-model="post.body" placeholder="Post body" required />
      <input v-model="post.tags" placeholder="tags" required />
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {

      post: {id : Math.floor(Math.random() * 100000) , title: '', body: '', tags: '' }
    };
  },
  methods: {
    async addPost() {
      try {
        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.post)
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        this.$router.push('/');
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  }
};
</script>