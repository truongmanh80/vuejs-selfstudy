<template>
  <author name="Element Basic"></author>
  <header>
    <div class="wrapper">
      <nav>
          <router-link to="/button">button</router-link>
          <router-link to="/border">border</router-link>
          <router-link to="/color">color</router-link>
          <router-link to="/layout-container">layout-container</router-link>
          <router-link to="/icon">icon</router-link>
          <router-link to="/layout">layout</router-link>
          <router-link to="/link">link</router-link>
          <router-link to="/text">text</router-link>
          <router-link to="/scrollbar">scrollbar</router-link>
          <router-link to="/space">space</router-link>
          <router-link to="/typography">typography</router-link>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import Author from "@/components/Author.vue";

export default {
  name: "ElementBasicExample",
  components: {Author},
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