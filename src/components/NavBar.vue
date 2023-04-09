<script setup lang="ts">
import LanguageSelect from './LanguageSelect.vue';
</script>

<template>
    <nav class="flex flex-col justify-center grid justify-items-center">
      <h1 class="text-2xl">
        <RouterLink class="route" to="/">Elena + Justinas</RouterLink>
      </h1>
      <ul class="flex flex-row list-items">
        <RouterLink class="route" to="/story">{{ $t('navbar.story') }}</RouterLink>
        <RouterLink class="route" to="/agenda">{{ $t('navbar.agenda') }}</RouterLink>
        <RouterLink class="route" to="/travel">{{  $t('navbar.travel') }}</RouterLink>
        <RouterLink class="route" to="/things-to-do">{{ $t('navbar.thingsToDo') }}</RouterLink>
        <RouterLink class="route" to="/q-and-a">{{  $t('navbar.QnA') }}</RouterLink>
        <RouterLink class="route" to="/people">{{ $t('navbar.people') }}</RouterLink>
        <RouterLink class="route" to="/rsvp">{{  $t('navbar.rsvp') }}</RouterLink>
        <LanguageSelect/>
      </ul>
    </nav>
</template>

<style scoped>
.list-items .route {
  @apply py-1 px-3 hover:bg-pink-200 hover:rounded-t-lg;
}
ul .router-link-active {
  @apply bg-pink-200 rounded-t-lg;
}
</style>

<!-- border-b-4 border-pink-500 -->