<template>
  <author name="Element Form"></author>
  <header>
    <div class="wrapper">
      <nav>
        <!--        <setup-example title="book"></setup-example>-->
        <router-link to="/autocomplete">autocomplete</router-link>
        <router-link to="/cascader">cascader</router-link>
        <router-link to="/checkbox">checkbox</router-link>
        <router-link to="/colorpicker">colorpicker</router-link>
        <router-link to="/datepicker">datepicker</router-link>

      </nav>
    </div>
  </header>
  <router-view></router-view>
<!--  <h1>Welcome to tutorial about form in Vue.js 3</h1>-->
<!--  <h1>Basic Form</h1>-->
<!--  <el-form :model="form" label-width="120px">-->
<!--    <el-form-item label="name">-->
<!--      <el-input v-model="form.name" />-->
<!--    </el-form-item>-->

<!--    <el-form-item label="description">-->
<!--      <el-input v-model="form.description" />-->
<!--    </el-form-item>-->
<!--  </el-form>-->

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
<!--  <el-button>Default</el-button>-->
</template>

<script lang="ts" setup>
// import { ElButton, ElForm } from "element-plus";
// import {reactive} from "vue";
import Author from "@/components/Author.vue";

// const form = reactive( {
//   name: '',
//   description: ''
// })
//
// const formInline = reactive({
//   user: '',
//   region: '',
// })

const onSubmit = () => {
  console.log("submit!")
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>