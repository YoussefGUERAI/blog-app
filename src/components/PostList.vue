<template>
    <div>
        <h2> Blog Posts </h2>
        <div v-if="error">{{ error }}</div>
        <div v-else>
            <SinglePost v-for="post in posts" :key="post.id" :post="post"/>
        </div>
        
    </div>
</template>

<script>
    import SinglePost from './SinglePost.vue';
    export default {
        name : 'PostList',
        components : {SinglePost},
        data(){
            return{
                posts : [],
                error : null
            }
        },
        mounted() {
            fetch('http://localhost:3000/posts')
            .then(res => {
                if (!res.ok) {
                throw Error('Failed to fetch posts')
                }
                return res.json()
            })
            .then(data => {
                this.posts = data
            })
            .catch(err => {
                this.error = err.message
            })}

    }

</script>

<style scoped>

</style>