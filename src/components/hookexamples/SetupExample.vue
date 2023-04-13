<template>
  <Author name="setup Example"></Author>
  <h2>value from refs {{count}}</h2>
  <h2>value (not use refs) {{count2}}</h2>

  <button @click="swapNames">button: show</button>
  <h2>employee: </h2>
  <h2>        : {{state.first_name}}</h2>
  <h2>        : {{state.last_name}}</h2>

  <h1>Check .value from ref()</h1>
  <button @click="increaseAge">increase: {{age}}</button>
  <button @click="decreaseAge">decrease: {{age}}</button>
</template>

<script>
import Author from "@/components/Author.vue";
import {reactive, ref, toRef, toRefs} from "vue";
import * as params from "element-plus/es/components/table/src/h-helper";

export default {
  name: "SetupExample",
  components: {Author},
  // example declare props
  props: {
    title: String
  },
  // props: ['title'],
  setup(props, context) {
    // primitive value
    const count = ref(0);
    const age = ref(0);

    const count2 = 10;

    const count3 = count + count2;

    // handle props
    // todo: turn `props` into an object of refs, then destructure
    // todo: `title` is a ref that tracks `props.title`
    // todo: or, turn a single property on `props` into a ref
    const { title } = toRefs(props);
    console.log(title.value);
    const title2 = toRef(props, 'title');
    console.log(title2)

    console.log(props.title)

    // object or array
    const state = reactive({
      first_name: 'John',
      last_name: 'Doe'
    });

    // reactive không cần .value
    function swapNames() {
      state.first_name = "Naruto"
      state.last_name = "Uzumaki"
      console.log(state.first_name + state.last_name);
    }
    // vì nó là ref() nên phải .value ở đây, nếu không sẽ bị lỗi
    function increaseAge() {
      age.value++
    }

    function decreaseAge() {
      age.value--
    }

    console.log(props.title)
    // expose to template and other options API hooks
    return {
      count,
      count2,
      count3,
      state,
      swapNames,
      increaseAge,
      decreaseAge,
      age
    }
  },
  mounted() {
    console.log("hook mounted from setup example: count2: " + this.count2 + ",count: " + this.count)
  }
}
</script>
<style scoped>

</style>