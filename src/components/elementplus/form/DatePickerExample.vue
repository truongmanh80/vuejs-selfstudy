<template>
  <author name="Date Picker"></author>
  <div>
    <h1>Enter Date</h1>
    <el-radio-group v-model="size" label="size control" size="small">
      <el-radio-button label="large">large</el-radio-button>
      <el-radio-button label="default">default</el-radio-button>
      <el-radio-button label="small">small</el-radio-button>
    </el-radio-group>
    <div>
      <div class="block">
        <span>Default</span>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size"/>
      </div>
      <div>
        <span>Picker with quick options</span>
        <el-date-picker v-model="value2" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
                        :shortcuts="shortcuts" :size="size"/>
      </div>
    </div>
  </div>
  <div>
    <h1>Other measurements</h1>
    <div class="demo-date-picker">
      <div class="container">
        <div class="block">
          <span class="demonstration">Week</span>
          <el-date-picker v-model="value3" type="week" format="[Week] ww" placeholder="Pick a week"/>
        </div>
        <div class="block">
          <span class="demonstration">Month</span>
          <el-date-picker v-model="value4" type="month" placeholder="Pick a month"/>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">Year</span>
          <el-date-picker v-model="value5" type="year" placeholder="Pick a year"/>
        </div>
        <div class="block">
          <span class="demonstration">Dates</span>
          <el-date-picker v-model="value6" type="dates" placeholder="Pick one or more dates"/>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1>Month Range</h1>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker v-model="value7" type="monthrange" range-separator="To"
            start-placeholder="Start month" end-placeholder="End month"/>
      </div>
      <div class="block">
        <span class="demonstration">With quick options</span>
        <el-date-picker v-model="value8" type="monthrange" unlink-panels range-separator="To"
            start-placeholder="Start month" end-placeholder="End month" :shortcuts="shortcuts2"/>
      </div>
    </div>
  </div>
  <div>
    <h1>Default Value</h1>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">date</span>
        <el-date-picker v-model="value9" type="date" placeholder="Pick a date"
            :default-value="new Date(2010, 9, 1)"
        />
      </div>
      <div class="block">
        <span class="demonstration">daterange</span>
        <el-date-picker
            v-model="value10" type="daterange" start-placeholder="Start Date" end-placeholder="End Date"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"/>
      </div>
    </div>
  </div>
  <div>
    <h1>Date Formats</h1>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Emits Date object</span>
        <div class="demonstration">Value: {{ value11 }}</div>
        <el-date-picker v-model="value11" type="date" placeholder="Pick a Date" format="YYYY/MM/DD"/>
      </div>
      <div class="block">
        <span class="demonstration">Use value-format</span>
        <div class="demonstration">Value：{{ value12 }}</div>
        <el-date-picker v-model="value12" type="date" placeholder="Pick a Date" format="YYYY/MM/DD" value-format="YYYY-MM-DD"/>
      </div>
      <div class="block">
        <span class="demonstration">Timestamp</span>
        <div class="demonstration">Value：{{ value13 }}</div>
        <el-date-picker v-model="value13" type="date" placeholder="Pick a Date" format="YYYY/MM/DD" value-format="x"/>
      </div>
    </div>
  </div>
  <div>
    <h1>Default time for start date and end date</h1>
    <div class="demo-date-picker">
      <div class="block">
        <p>Component value：{{ value14 }}</p>
        <el-date-picker
            v-model="value14"
            type="daterange"
            start-placeholder="Start date"
            end-placeholder="End date"
            :default-time="defaultTime"
        />
      </div>
    </div>
  </div>
  <div>
    <h1>Set custom content of prefix</h1>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">set prefix-icon</span>
        <el-date-picker v-model="value15" type="date" placeholder="Pick a day" :prefix-icon="customPrefix"/>
      </div>
    </div>
  </div>
  <div>
    <h1>Custom content</h1>
    <div class="demo-date-picker">
      <el-date-picker v-model="value16" type="date" placeholder="Pick a day"
          format="YYYY/MM/DD" value-format="YYYY-MM-DD">
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
          </div>
        </template>
      </el-date-picker>
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script lang="ts" setup>
import Author from "@/components/Author.vue";
import {h, ref, shallowRef} from "vue";

const size = ref<'default' | 'large' | 'small'>('default')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')

const value11 = ref('')
const value12 = ref('')
const value13 = ref('')

const value14 = ref('')

const value15 = ref('')

const value16 = ref('')

const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
const shortcuts2 = [
  {
    text: 'This month',
    value: [new Date(), new Date()],
  },
  {
    text: 'This year',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    },
  },
  {
    text: 'Last 6 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    },
  },
]

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
]
const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

</style>