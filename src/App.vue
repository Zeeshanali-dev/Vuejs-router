<template>
    <div>
        <h1>App</h1>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/posts">Posts</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>