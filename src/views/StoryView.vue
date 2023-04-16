<template>
    <div class="story p-4">
      <div class="content-row flex items-center justify-center py-4">
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/us-near-castle.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('story.ourStoryTitle') }}</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">{{ $t('story.ourStoryP1') }}</p>
            <p>{{ $t('story.ourStoryP2') }}</p>
          </div>
        </div>
      </div>

      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <img src="../assets/best-man.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('story.bestManTitle') }}</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">{{ $t('story.bestManP1') }}</p>
            <p>{{ $t('story.bestManP2') }}</p>
          </div>
        </div>
        <div class="desktop content-picture w-1/2 pb-3/4">
          <img src="../assets/best-man.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
      </div>

      <div class="content-row flex items-center justify-center py-4">
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/best-woman.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('story.maidOfHonorTitle') }}</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">{{ $t('story.maidOfHonorP1') }}</p>
            <p>{{ $t('story.maidOfHonorP2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
@media (min-width: 768px) {
  .content-row {
    flex-direction: row;
  }
  .mobile {
    display: none;
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
    @apply py-4 w-5/6 px-1;
  }

  .desktop {
    display: none;
  }
}
</style>