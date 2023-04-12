<template>
  <button @click="sendValue">Send value to parent</button>
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emits = defineEmits(['value-changed']);

  let age = 18;
  function sendValue() {
    emits('value-changed', "Hello from child: Manh Component 3! I'm " + age)
  }
</script>

<style scoped>

</style>