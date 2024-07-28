<template>
    <div>
        <table border="1px">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Data</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in PostsData" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                    <td> <router-link :to="`/post/${post.id}`">View</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const PostsData = ref([]);
const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        PostsData.value = jsonData;  // Update the reactive reference's value
    } catch (error) {
        console.error('Error fetching posts:', error);  // Handle errors appropriately
    }
}

onMounted(() => {
    fetchPost();
});
</script>
<style scoped></style>