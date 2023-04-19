<script setup lang="ts">
</script>

<template>
  <main>
      <div class="desktop bg-white p-4 pt-8">
        <div class="content-row flex items-center justify-center">
          <div class="content-picture w-1/2 pb-3/4">
            <img src="../assets/squareish-home-picture.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
          </div>
          <div class="content-text w-1/2 px-4 flex flex-col items-center">
            <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('home.gettingMarried') }}</h2>
            <div class="flex flex-col leading-relaxed">
              <p><b>{{ $t('home.when') }}</b> {{ $t('home.whenAnswer') }}</p>
              <p><b>{{ $t('home.where') }}</b> {{ $t('home.whereAnswer') }}</p>
              <p><b>{{ $t('home.maidOfHonor') }}</b> {{ $t('home.maidOfHonorAnswer') }}</p>
              <p><b>{{ $t('home.bestMan') }}</b> {{ $t('home.bestManAnswer') }}</p>
              <p><b>{{ $t('home.rsvp') }}</b> {{ $t('home.rsvpAnswer') }}</p>
            </div>
            <button class="my-3 px-4 py-2 rounded-lg bg-[#EE576A] hover:bg-[#5CC6B6] text-white hover:text-white">
                <RouterLink to="/rsvp"><b>{{ $t('home.rsvpButton') }}</b></RouterLink>
            </button>
          </div>
        </div>
      </div>
  </main>
</template>

<style scoped>
@media (min-width: 768px) {
  .content-row {
    flex-direction: row;
  }
}
@media (max-width: 768px) {
  .content-row {
    flex-direction: column;
  }
  .content-picture {
    @apply w-5/6;
  }

  .content-text {
    @apply pt-4 w-5/6 px-1;
  }
}
</style>