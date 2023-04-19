<template>
    <div class="p-4">
      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2198.4512698852022!2d23.789747176536572!3d55.06558144471301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e6e2551ab33125%3A0xc879ee13c98379d4!2sBabtyno%20dvaras!5e1!3m2!1slt!2slt!4v1681583651204!5m2!1slt!2slt" style="border:0;" allowfullscreen="false" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full rounded-lg"></iframe>
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('location.gettingThere')}}</h2>
          <p class="pb-4 text-justify">
            <b>{{ $t('location.byCar')}}</b> - {{ $t('location.byCarText')}}
          </p>
          <p class="text-justify">
            <b>{{ $t('location.byTaxi')}}</b> - {{ $t('location.byTaxiText')}}
          </p>
        </div>
        <div class="desktop content-picture w-1/2 pb-3/4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2198.4512698852022!2d23.789747176536572!3d55.06558144471301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e6e2551ab33125%3A0xc879ee13c98379d4!2sBabtyno%20dvaras!5e1!3m2!1slt!2slt!4v1681583651204!5m2!1slt!2slt" style="border:0;" allowfullscreen="false" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full rounded-lg"></iframe>
        </div>
      </div>

      <div class="content-row flex items-center justify-center py-4">
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/dvaras-1.jpeg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('location.historyTitle') }}</h2>
          <p class="text-justify">{{ $t('location.history') }}</p>
        </div>
      </div>
      
      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <img src="../assets/dvaras-2.jpeg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('location.20thCenturyTitle') }}</h2>
          <p class="pb-4 text-justify">{{ $t('location.20thCenturyP1') }}</p>
          <p class="text-justify">{{ $t('location.20thCenturyP2') }}</p>
        </div>
        <div class="desktop content-picture w-1/2 pb-3/4">
          <img src="../assets/dvaras-2.jpeg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
      </div>

      <div class="content-row flex items-center justify-center py-4">
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/dvaras-3.jpeg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">{{ $t('location.presentTitle') }}</h2>
          <p class="pb-4 text-justify">{{ $t('location.presentP1') }}</p>
          <p class="text-justify">{{ $t('location.presentP2') }}</p>
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