<script lang="ts">
import RsvpForm from "../components/RsvpForm.vue";
export default {
  components: {
    RsvpForm
  }
}
</script>

<template>
  <div class="rsvp p-2 pt-4">
    <div class="text-center">
      <h1 class="text-xl font-bold px-4">{{ $t('rsvp.title') }}</h1>
      <p class="text-lg px-8">{{ $t('rsvp.hint') }}</p>
    </div>
    <RsvpForm class="px-8"/>
  </div>
</template>