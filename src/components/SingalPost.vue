<template>
    <div>
        <table border="1px">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="PostsData.id">
                    <td>{{ PostsData.id }}</td>
                    <td>{{ PostsData.title }}</td>
                    <td>{{ PostsData.body }}</td>
                </tr>
                <tr v-else>
                    <td colspan="3">Loading...</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const PostsData = ref({});

const fetchPost = async () => {
    const selectedId = route.params.id;
    console.log(selectedId);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData);
        PostsData.value = jsonData;  // Update the reactive reference's value
    } catch (error) {
        console.error('Error fetching post:', error);  // Handle errors appropriately
    }
}

onMounted(() => {
    fetchPost();
});
</script>

<style scoped></style>