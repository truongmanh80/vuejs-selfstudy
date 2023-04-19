<template>
  <author name="Autocomplete"></author>
  <div>
    <h1>Basic Usage</h1>
    <el-row>
      <el-col :span="12">
        <div>list suggestions when activated</div>
        <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50" placeholder="Please Input" @select="handleSelect"/>
      </el-col>
      <el-col :span="12">
        <div>list suggestions on input</div>
        <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" :trigger-on-focus="false" clearable class="inline-input w-50" placeholder="Please Input" @select="handleSelect"/>
      </el-col>
    </el-row>
  </div>
  <div>
    <h1>Custom template</h1>
    <el-autocomplete v-model="state" :fetch-suggestions="querySearch2" placeholder="Please input" @select="handleSelect">
      <template #suffix>
        <el-icon class="el-input__icon" @click="handleIconClick">
          <edit />
        </el-icon>
      </template>
      <template #default="{ item }">
        <div class="value">{{ item.value }}</div>
        <span class="link">{{ item.link }}</span>
      </template>
    </el-autocomplete>
  </div>
  <div>
    <h1>Remote search</h1>
    <h2>Search data from server-side.</h2>
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import Author from "@/components/Author.vue";
import {onMounted, ref} from "vue";
import { Edit } from '@element-plus/icons-vue'

const state = ref('');
const state1 = ref('');
const state2 = ref('');
const restaurants = ref<RestaurantItem[]>([])
const links = ref<LinkItem[]>([])
interface RestaurantItem {
  value: string
  link: string
}

interface LinkItem {
  value: string
  link: string
}

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
      ? restaurants.value.filter(createFilter(queryString))
      : restaurants.value

  // alert(results.at(0).value)

  // call callback function to return suggestions
  cb(results)
}

const querySearch2 = (queryString: string, cb: any) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value
  // call callback function to return suggestions
  cb(results)
}

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    // if (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) {
    //   console.log(restaurant.value)
    // }
    // console.log(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
  console.log(item.value, item.link)
}

onMounted(() => {
  restaurants.value = loadAll()
  links.value = loadAll()
})

const handleIconClick = (ev: Event) => {
  console.log(ev)
}

let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value
  console.log(timeout)
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}

</script>

<style scoped>

</style>