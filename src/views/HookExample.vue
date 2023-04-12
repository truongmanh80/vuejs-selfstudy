<template>
  <Author name="Hook Example"></Author>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/setup">setup</router-link>
        <router-link to="/before-create">before-create</router-link>
        <router-link to="/create">create</router-link>
        <router-link to="/before-mount">before-mount</router-link>
        <router-link to="/mount">mount</router-link>
        <router-link to="/before-update">before-update</router-link>
        <router-link to="/update">update</router-link>
        <router-link to="/unmount">unmount</router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>

</template>

<script>
import Author from "@/components/Author.vue";

export default {
  components: {Author},

  /**
   * setup hook
   */
  setup() {
    console.log("I'm setup hook!!!")
  },

  /**
   * beforeCreate hook
   */
  beforeCreate() {
    console.log("I'm beforeCreate hook!!!")
  },

  /**
   * data hook
   * @returns {{name: string}}
   */
  data() {
    console.log("I'm data hook!!!")
    return {
      name: ''
    }
  },

  /**
   * create hook
   */
  created() {
    console.log("I'm create hook!!!")
  },

  /**
   * beforeMount hook
   */
  beforeMount() {
    console.log("I'm beforeMount hook!!!")
  },

  /**
   * mounted hook
   */
  mounted() {
    console.log("I'm mounted hook!!!")
  },

  /**
   * beforeUpdate hook
   * This hook is not called during server-side rendering
   */
  beforeUpdate() {
    console.log("I'm beforeUpdate hook!!!")
  },

  /**
   * updated
   * This hook is not called during server-side rendering.
   * WARNING
   * Do not mutate component state in the updated hook - this will likely lead to an infinite update loop!
   */
  updated() {
    console.log("I'm updated hook!!!")
  },

  /**
   * beforeUnmount
   * This hook is not called during server-side rendering.
   */
  beforeUnmount() {
    console.log("I'm beforeUnmount hook!!!")
  },

  /**
   * beforeUnmount
   * This hook is not called during server-side rendering.
   */
  unmounted() {
    console.log("I'm unmounted hook!!!")
  },

  /**
   * some hooks:
   *    errorCaptured
   *    renderTracked
   *    renderTriggered
   *    activated
   *    deactivated
   *    serverPrefetch : SSR only
   *
   */
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