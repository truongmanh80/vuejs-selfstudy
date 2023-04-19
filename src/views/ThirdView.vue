
<template>
  <h1>Welcome to third view</h1>
  <!--  example of next-->
  <button id="counter" @click="increment">{{count}}</button>

  <!--  user-defined component-->
  <ManhComponent/>

  <h1>Pass from parent to child</h1>
  <manh-component2 full-name="Manh Do"></manh-component2>
<!--  <h2>{{this.ManhComponent2.data().age}}</h2>-->

  <h1>2.1 Pass from child to parent</h1>
  <h2>theo kieu script export default</h2>
<!--  truyen tu con sang cha theo kieu <script> export default-->
  <manh-component2 @value-changed="handleChildValue" @clear-text="clearText1"></manh-component2>
  {{value1}}

<!--  <h2>Manh Component 3</h2>-->
  <h1>2.2 Pass from child to parent</h1>
  <h2>theo kieu script setup</h2>
<!--  truyen tu con sang cha theo kieu script setup-->
  <manh-component3 @value-changed="handleChildValue2" @clear-text="clearText2"></manh-component3>
  {{value2}}
</template>

<script setup>
import {nextTick, ref} from "vue";
import ManhComponent from "@/components/ManhComponent.vue";
import ManhComponent2 from "@/components/ManhComponent2.vue";
import ManhComponent3 from "@/components/ManhComponent3.vue";


const count = ref(0);
const value1 = ref('');
const value2 = ref('');
async function increment() {
  count.value++

  //DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick();

  //DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 1
}

function clearText1() {
  value1.value = ''
}

function clearText2() {
  value2.value = ''
}
function handleChildValue (value) {
  value1.value = value
  console.log(value) // someValue
}

function handleChildValue2 (value) {
  value2.value = value
  console.log(value) // someValue
}

// beforeMount:{
//   // dataFromChild = ManhComponent2.data();
//   console.log("A")
// }


// export default defineComponent({
//   props: {
//     title: {
//       type: String,
//       default: "",
//       required: false
//     }
//   }
// })

// function check_nextick() {
//   this.$nextick();
// }
</script>

<style scoped>

</style>