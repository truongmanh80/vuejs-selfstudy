<template>
  <Author name="Setup Example"></Author>
</template>

<script>
import Author from "@/components/Author.vue";
import {ref} from "vue";

export default {
  name: "SetupExample",
  components: {Author},
  setup() {
    const count = ref(0);
    return {
      count
    }
  }
}
</script>
<style scoped>

</style>