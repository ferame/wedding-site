<script setup lang="ts">
import LanguageSelect from './LanguageSelect.vue';
</script>

<template>
    <nav class="flex flex-col bg-white">
      <h1 class="title top text-2xl pt-1 flex justify-center hover:text-pink-500">
        <!-- Add detail where colorful umbrella is shown if we are in homepage, and black/white when in other page -->
        <RouterLink class="route" to="/">
          <img src="../assets/Elena_Justinas_no_background.png" width="150">
        </RouterLink>
      </h1>
      <div class="menu flex flex-row justify-between font-bold">
        <ul class="left-side flex flex-row list-items">
          <RouterLink class="route" to="/story">{{ $t('navbar.story') }}</RouterLink>
          <RouterLink class="route" to="/agenda">{{ $t('navbar.agenda') }}</RouterLink>
          <RouterLink class="route" to="/location">{{  $t('navbar.location') }}</RouterLink>
          <RouterLink class="route" to="/q-and-a">{{  $t('navbar.QnA') }}</RouterLink>
        </ul>
        <div class="right-side flex flex-row">
          <RouterLink class="route rsvp" to="/rsvp">{{  $t('navbar.rsvp') }}</RouterLink>
          <LanguageSelect/>
        </div>
      </div>
    </nav>
</template>

<style scoped>
.list-items.left-side .route {
  @apply py-1 px-3 hover:bg-pink-100 hover:rounded-t-lg;
}

.right-side .route {
  @apply py-1 px-3 hover:bg-pink-100 hover:rounded-t-lg;
}
.menu .router-link-active {
  @apply bg-pink-200 rounded-t-lg;
}

.title .router-link-active {
  @apply text-pink-500
}
</style>

/* White - #FFFFFF */
/* Yellow - #FFD95F */
/* Green - #EE576A */
/* Red - #5CC6B6 */