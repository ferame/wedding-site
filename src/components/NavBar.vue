<script setup lang="ts">
</script>

<template>
    <nav>
      <h1>Elena & Justinas</h1>
      <ul>
        <li class="navbar-route"><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/info">Info</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </template>

<style scoped>
/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  // margin-top: 2rem;
  border: 10px solid red;
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
} */

nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  margin: 0;
  text-align: left;
  padding-left: 2rem;
}

nav ul {
  margin: 0;
  padding: 0;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

li {
    margin-right: 1rem;
}

</style>