<template>
  <h1>ManhComponent2</h1>
  <h2>{{fullName}}</h2>
  <button @click="sendValue">Send value to parent</button>
</template>

<script>
export default {
  name: 'ManhComponent2',
  data() {
    return {
      age: 18
    }
  },
  props: ['fullName'],
  emits: ['value-changed'],
  methods: {
    sendValue () {
      this.$emit('value-changed', "Hello from child! I'm " + this.age)
    }
  }
}

</script>

<style scoped>

</style>