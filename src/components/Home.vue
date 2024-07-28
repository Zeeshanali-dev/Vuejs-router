<template>
    <div>
        <h1>home</h1>
        <div>Counter: {{ counter.count }}</div>
        <div>dblCounter: {{ counter.doubleCount }}</div>
        <button @click="counter.increment()">Increment</button>
        <button @click="counter.decrement()">decrement</button>
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';


const counter = useCounterStore();

</script>
<style scoped></style>