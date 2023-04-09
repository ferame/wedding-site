<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template class="relative margin-auto">
  <header class="fixed top-0 left-0 right-0 pt-2 px-6 bg-pink-50 border-b-4 border-black">
    <NavBar/>
  </header>

  <!-- max-width: 1080px; 
	margin: 0 auto !important; 
	float: none !important;  -->

  <div class="min-h-screen pt-[72px] pb-5 max-w-screen-lg mx-auto float-none">
    <RouterView/>
  </div>
  
  <footer class="flex justify-center fixed bottom-0 left-0 right-0 py-2 px-5 bg-pink-100 border-t-4 border-black">
    <div>Placeholder footer text</div>
  </footer>
</template>
