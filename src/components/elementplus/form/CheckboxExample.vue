<template>
  <author name="Checkbox Example"></author>
  <div>
    <h1>Basic usage</h1>
    <div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
      <p>{{checked1}}</p>
      <p>{{checked2}}</p>
    </div>
    <div>
      <el-checkbox v-model="checked3" label="Option 1" />
      <el-checkbox v-model="checked4" label="Option 2" />
      <p>{{checked3}}</p>
      <p>{{checked4}}</p>
    </div>
    <div>
      <el-checkbox v-model="checked5" label="Option 1" size="small" />
      <el-checkbox v-model="checked6" label="Option 2" size="small" />
      <p>{{checked5}}</p>
      <p>{{checked6}}</p>
    </div>
    <div>
      <el-checkbox v-model="checked7" label="Option 1" size="small" disabled />
      <el-checkbox v-model="checked8" label="Option 2" size="small" disabled />
    </div>
  </div>
  <div>
    <h1>Indeterminate</h1>
    <h2>check all</h2>
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
      Check all
    </el-checkbox>

    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
  <div>
    <h1>Minimum / Maximum items checked</h1>
    <el-checkbox-group v-model="checkedCities2" :min="1" :max="2">
      <el-checkbox v-for="city in cities2" :key="city" :label="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
  <div>
    <h1>Button with borders</h1>
    <div>
      <el-checkbox v-model="checked11" label="Option1" size="large" border />
      <el-checkbox v-model="checked22" label="Option2" size="large" border />
    </div>
    <div class="mt-4">
      <el-checkbox v-model="checked33" label="Option1" border />
      <el-checkbox v-model="checked44" label="Option2" border />
    </div>
    <div class="mt-4">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="Option1" border />
        <el-checkbox label="Option2" border />
      </el-checkbox-group>
    </div>
    <div class="mt-4">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="Option1" border disabled />
        <el-checkbox label="Option2" border disabled />
      </el-checkbox-group>
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script lang="ts" setup>
import Author from "@/components/Author.vue";
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const checked8 = ref(false)

const checked11 = ref(true)
const checked22 = ref(false)
const checked33 = ref(false)
const checked44 = ref(false)
const checkboxGroup1 = ref(['Option1'])

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const checkedCities2 = ref(['Shanghai', 'Beijing'])
const cities2 = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  console.log('handleCheckAllChange')
  console.log(val)
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
  console.log(isIndeterminate.value)
}

const handleCheckedCitiesChange = (value: string[]) => {
  console.log('handleCheckedCitiesChange')
  console.log(value)
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
  console.log(isIndeterminate.value)
}
</script>

<style scoped>

</style>