<template>
  <div>
    <h1>Welcome to form Vue.js</h1>
    text
    <input v-model="text" placeholder="edit me now">
    <p>{{text}}</p>
    multiline
    <textarea v-model="message" placeholder="add multiline"></textarea>
    <p>{{message}}</p>
    <div>
    checkbox
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
    </div>
    <p> {{checkedNames}}</p>
    <div>
    radio
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>
    <p>Picked: {{ picked }}</p>
    <div>
        select
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <p>{{selected}}</p>
    </div>
    <div>
      multiple select
      <select v-model="selected2" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <p>{{selected2}}</p>
    </div>

    <div>
      dynamic rendered with v-for
      <select v-model = "selected3">
        <option v-for="option in options" :value="option.value">
          {{option.text}}
        </option>
      </select>
      <p>{{selected3}}</p>
    </div>
    <div>
     value bindings
      <input type="checkbox"
             v-model="toggle1"
             :false-value="false"
             :true-value="true">
      <p>{{toggle1}}</p>



      <input
          type="checkbox"
          v-model="toggle2"
          :true-value="checkboxList.at(0)"
          :false-value="checkboxList.at(1)">

      <p>{{toggle2}}</p>

    </div>

    <div>
<!--      ------------------------------------------------------>
      <button @click="changeSomething">Example Button</button>
<!--      ------------------------------------------------------>
    </div>
<!--  modifier-->
<!--    .lazy-->
<!--    ,number-->
      <input v-model.number="age">
<!--      <p>{{age}}</p>-->
      <p>{{ showAge() }}</p>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SecondView",
  data() {
    return {
      text: '',
      message: '',
      checkedNames: [],
      picked: [],
      picked2: [],
      selected: [],
      selected2: [],
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      selected3: [],
      toggle: [],
      toggle1: false,
      toggle2: "",
      selected4: [],
      testMethod: 1,
      checkboxList: [
          "dynamicTrueValue", "dynamicFalseValue"
      ],
      age: 0,
    }
  },
  methods: {
    changeSomething() {
      this.testMethod++;
      console.log("change something!!!");
    },
    showAge() {
      console.log(this.age);
    },
  },
  created() {
    console.log(this.age);
  },
}
</script>

<style scoped>

</style>