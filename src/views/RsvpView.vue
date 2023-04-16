<script lang="ts">
import RsvpForm from "../components/RsvpForm.vue";
export default {
  components: {
    RsvpForm
  }
}
</script>

<template>
  <div class="rsvp p-2">
    <div class="text-center">
      <h1 class="text-xl font-bold">We look forward to seeing you!</h1>
      <p class="text-lg">If you wish, you can fill only one form for yourself and anyone else who is joining you</p>
    </div>
    <RsvpForm class="px-8"/>
  </div>
</template>