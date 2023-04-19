<template>
  <div>
    <h1>Basic usage</h1>
    <el-form>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-form>
    <el-form></el-form>
    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>
    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  </div>
  <div>
    <h1>Disabled Button</h1>
    <el-row class="mb-4">
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>Plain</el-button>
      <el-button type="primary" plain disabled>Primary</el-button>
      <el-button type="success" plain disabled>Success</el-button>
      <el-button type="info" plain disabled>Info</el-button>
      <el-button type="warning" plain disabled>Warning</el-button>
      <el-button type="danger" plain disabled>Danger</el-button>
    </el-row>
  </div>

  <div>
    <h1>Basic link button</h1>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          link
      >{{ button.text }}</el-button
      >
    </div>

    <h1>Disable link button</h1>
    <div class="flex justify-space-between flex-wrap gap-4">
      <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          link
          disabled
      >{{ button.text }}</el-button
      >
    </div>
  </div>
  <div>
    <h1>Text button</h1>
    <h2>basic text button</h2>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
      >{{ button.text }}</el-button
      >
    </div>
    <h2>background color always on</h2>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
          bg
      >{{ button.text }}</el-button
      >
    </div>
    <h2>disabled text button</h2>
    <div class="flex justify-space-between flex-wrap gap-4">
      <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
          disabled
      >{{ button.text }}</el-button
      >
    </div>
  </div>
  <div>
    <h1>Icon button</h1>
    <div>
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" />
      <el-button type="primary" :icon="Delete" />
      <el-button type="primary" :icon="Search">Search</el-button>
      <el-button type="primary">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </div>
  <div>
    <h1>Button Group</h1>
    <div>
      <el-button-group>
        <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
        <el-button type="primary">Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
      </el-button-group>

      <el-button-group class="ml-4">
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
      </el-button-group>
    </div>
  </div>
  <div>
    <h1>Loading Button</h1>
    <div>
      <el-button type="primary" loading>Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
      <el-button type="primary" loading>
        <template #loading>
          <div class="custom-loading">
            <svg class="circular" viewBox="-10, -10, 50, 50">
              <path
                  class="path"
                  d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
                  style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
              />
            </svg>
          </div>
        </template>
        Loading
      </el-button>
    </div>
    <div>
      <h1>Sizes</h1>
      <div>
        <el-row>
          <el-button size="large">Large</el-button>
          <el-button>Default</el-button>
          <el-button size="small">Small</el-button>
          <el-button size="large" :icon="Search">Search</el-button>
          <el-button :icon="Search">Search</el-button>
          <el-button size="small" :icon="Search">Search</el-button>
        </el-row>

        <el-row class="my-4">
          <el-button size="large" round>Large</el-button>
          <el-button round>Default</el-button>
          <el-button size="small" round>Small</el-button>
          <el-button size="large" :icon="Search" round>Search</el-button>
          <el-button :icon="Search" round>Search</el-button>
          <el-button size="small" :icon="Search" round>Search</el-button>
        </el-row>

        <el-row>
          <el-button :icon="Search" size="large" circle />
          <el-button :icon="Search" circle />
          <el-button :icon="Search" size="small" circle />
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Eleme,
  ArrowLeft,
  ArrowRight,
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share,
  Upload
} from '@element-plus/icons-vue'

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const

</script>

<style scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>