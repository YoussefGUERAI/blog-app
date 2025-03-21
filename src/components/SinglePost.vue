<template>
    <div class="blog">
        <h3> {{ post.title }}</h3>
        <p> {{ post.body.substring(0, 50) }}...</p>
        <router-link :to="`/detail/${post.id}`">Read More</router-link>

    </div>
</template>

<script>
    export default {
        name : 'SinglePost',
        props : ['post']
    }
</script>

<style scoped>

.blog{
    border: 1px black solid;
    border-radius: 30px;
    margin: 30px;

}

</style>