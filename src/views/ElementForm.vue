<template>
  <h1>Welcome to tutorial about form in Vue.js 3</h1>
  <h1>Basic Form</h1>
  <el-form :model="form" label-width="120px">
    <el-form-item label="name">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="description">
      <el-input v-model="form.description" />
    </el-form-item>
  </el-form>

<!--  <h1>Inline Form</h1>-->

<!--  <el-form :inline="true" :model="formInline" class="demo-form-inline">-->
<!--    <el-form-item label="Approved by">-->
<!--      <el-input v-model="formInline.user" placeholder="Approved by" />-->
<!--    </el-form-item>-->

<!--    <el-form-item label="Activity zone">-->
<!--      <el-select v-model="formInline.region" placeholder="Activity zone">-->
<!--        <el-option label="Zone one" value="shanghai" />-->
<!--        <el-option label="Zone two" value="beijing" />-->
<!--      </el-select>-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="onSubmit">Query</el-button>-->
<!--    </el-form-item>-->
<!--  </el-form>-->

  <el-button>Default</el-button>
</template>

<script lang="ts" setup>
import { ElButton, ElForm } from "element-plus";
import {reactive} from "vue";



const form = reactive({
  name: '',
  description: ''
});

const onSubmit = () => {
  console.log("submit!")
}

// export default {
//   name: "ElementForm",
//   components: {
//     ElButton,
//     ElForm,
//   },
//   setup: (props: string) => {
//     let form = reactive({
//       name: '',
//       description: ''
//     });
//
//     let  formInline = reactive({
//       user: '',
//       region: '',
//     });
//     return {
//       form: form,
//       formInline: formInline
//     };
//   },
//   methods: {
//     onSubmit: () => {
//       console.log('submit!')
//     }
//   }
// }

// const form = reactive( {
//   name: '',
//   description: ''
// })
//
// const formInline = reactive({
//   user: '',
//   region: '',
// })
</script>

<style scoped>

</style>