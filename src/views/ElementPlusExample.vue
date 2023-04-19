<template>
  <author name="Element Plus"></author>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/basic">basic</router-link>
        <router-link to="/form">form</router-link>
        <!--        <setup-example title="book"></setup-example>-->
<!--        <router-link to="/basic/button">button</router-link>-->
<!--        <router-link to="/basic/border">border</router-link>-->
<!--        <router-link to="/basic/color">color</router-link>-->
<!--        <router-link to="/basic/layout-container">layout-container</router-link>-->
<!--        <router-link to="/basic/icon">icon</router-link>-->
<!--        <router-link to="/basic/layout">layout</router-link>-->
<!--        <router-link to="/basic/link">link</router-link>-->
<!--        <router-link to="/basic/text">text</router-link>-->
<!--        <router-link to="/basic/scrollbar">scrollbar</router-link>-->
<!--        <router-link to="/basic/space">space</router-link>-->
<!--        <router-link to="/basic/typography">typography</router-link>-->
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import Author from "@/components/Author.vue";

export default {
  components: {Author}
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