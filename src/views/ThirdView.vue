
<template>
  <h1>Welcome to third view</h1>
  <!--  example of next-->
  <button id="counter" @click="increment">{{count}}</button>

  <!--  user-defined component-->
  <ManhComponent/>

  <!--  -->
  <manh-component2 full-name="Manh Do"></manh-component2>
<!--  <h2>{{this.ManhComponent2.data().age}}</h2>-->

<!--  truyen tu con sang cha theo kieu <script> export default-->
  <manh-component2 @value-changed="handleChildValue"></manh-component2>
  <h2>Manh Component 3</h2>
<!--  truyen tu con sang cha theo kieu script setup-->
  <manh-component3 @value-changed="handleChildValue"></manh-component3>

</template>

<script setup>
import {nextTick, ref} from "vue";
import ManhComponent from "@/components/ManhComponent.vue";
import ManhComponent2 from "@/components/ManhComponent2.vue";
import ManhComponent3 from "@/components/ManhComponent3.vue";


const count = ref(0);

async function increment() {
  count.value++

  //DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick();

  //DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 1
}

function handleChildValue (value) {
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