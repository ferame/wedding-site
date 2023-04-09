<script setup lang="ts">
</script>

<template>
    <nav class="flex flex-col justify-center grid justify-items-center">
      <h1 class="text-2xl">Elena + Justinas</h1>
      <ul class="flex flex-row space-x-5">
        <li class="hover:"><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:"><RouterLink to="/story">Story</RouterLink></li>
        <li class="hover:"><RouterLink to="/agenda">Agenda</RouterLink></li>
        <li class="hover:"><RouterLink to="/travel">Travel</RouterLink></li>
        <li class="hover:"><RouterLink to="/things-to-do">Things to Do</RouterLink></li>
        <li class="hover:"><RouterLink to="/q-and-a">Q & A</RouterLink></li>
        <li class="hover:"><RouterLink to="/people">People</RouterLink></li>
        <li class="hover:"><RouterLink to="/rsvp">RSVP</RouterLink></li>
      </ul>
    </nav>
</template>