<template>
<!--  <h1>ManhComponent2</h1>-->
<!--  <h2>{{fullName}}</h2>-->
  <button @click="sendValue">Send value to parent</button>
  <button @click="clearText">clear</button>
</template>

<script>
export default {
  // name: 'ManhComponent2',
  data() {
    return {
      age: 18
    }
  },
  props: ['fullName'],
  emits: ['value-changed', 'clear-text'],
  methods: {
    sendValue () {
      this.$emit('value-changed', "Hello from child! I'm " + this.age)
    },
    clearText() {
      this.$emit('clear-text')
    }
  }
}

</script>

<style scoped>

</style>