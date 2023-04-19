<template>
  <author name="Color Picker"></author>
  <div>
    <h1>Basic usage</h1>
    <div>
      <span>With default value</span>
      <el-color-picker v-model="color1" />
    </div>
    <div>
      <span>With no default value</span>
      <el-color-picker v-model="color2" />
    </div>
  </div>
  <div>
    <h1>Alpha</h1>
    <h2>alpha channel selecting</h2>
    <el-color-picker v-model="color" show-alpha />
  </div>
  <div>
    <h1>Predefined colors</h1>
    <el-color-picker v-model="color3" show-alpha :predefine="predefineColors" />
  </div>
  <div>
    <h1>Sizes</h1>
    <div>
      <el-color-picker v-model="color4" size="large" />
      <el-color-picker v-model="color4" />
      <el-color-picker v-model="color4" size="small" />
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script lang="ts" setup>
import Author from "@/components/Author.vue";
import {ref} from "vue";

const color1 = ref('#409EFF')
const color2 = ref()
const color = ref('rgba(19, 206, 102, 0.8)')
const color3 = ref('rgba(19, 206, 102, 0.8)')
const color4 = ref('409EFF')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>

<style scoped>

</style>