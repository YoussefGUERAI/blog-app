<template>
    <div class="blog">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-body">{{ post.body.substring(0, 50) }}...</p>
        <router-link :to="`/detail/${post.id}`" class="read-more">Read More</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SinglePost',
        props: ['post']
    }
</script>

<style scoped>
.blog {
    border: 1px solid black;
    border-radius: 30px;
    margin: 30px;
    padding: 20px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
}

.post-body {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
}

.read-more {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.read-more:hover {
    color: #0056b3;
}
</style>