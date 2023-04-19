<template>
  <button @click="sendValue">Send value to parent</button>
  <button @click="clearText">clear</button>
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emits = defineEmits(['value-changed']);

  let age = 18;
  function sendValue() {
    emits('value-changed', "Hello from child: Manh Component 3! I'm " + age)
  }

  function clearText() {
    emits('clear-text')
  }
</script>

<style scoped>

</style>