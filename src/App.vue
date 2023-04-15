<script setup lang="ts">
import { RouterView } from "vue-router";
import MobileNavBar from "./components/MobileNavBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template class="relative margin-auto">
  <header class="fixed top-0 left-0 right-0 border-b-2 border-black flex flex-column justify-center">
    <NavBar class="navbar max-w-screen-lg w-full px-4"/>
    <MobileNavBar class="mobile-navbar w-full"/>
  </header>

  <!-- <div class="router-view min-h-screen pt-[72px] pb-5 max-w-screen-lg mx-auto float-none"> -->
  <div class="router-view min-h-screen max-w-screen-lg mx-auto float-none">
    <RouterView/>
  </div>
  
  <!-- <footer class="flex justify-center fixed bottom-0 left-0 right-0 py-2 px-4 bg-pink-100">
    <div>Placeholder footer text</div>
  </footer> -->
</template>

<style scoped>
@media (min-width: 768px) {
    .mobile-navbar {
      display: none;
    }
    .router-view {
      padding-top: 104px;
    }
}
@media (max-width: 768px) {
  .navbar {
    display: none;
  }
  .router-view {
      padding-top: 80px;
  }
}
</style>
