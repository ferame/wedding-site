<template>
  <div class="p-4">
    <div class="content-row flex items-center justify-center py-4">
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4">{{ $t('agenda.schedule') }}</h2>
          <p class="text-xl font-bold mb-2 text-center">{{ $t('agenda.babtynas') }}</p>
          <p class="text-lg font-bold mb-2 text-center">{{ $t('agenda.date') }}</p>
          <ul class="text-lg">
            <p><b>15:00</b> - {{ $t('agenda.drinksSnacks') }}</p>
            <p><b>16:00</b> - {{ $t('agenda.ceremony') }}</p>
            <p><b>18:00</b> - {{ $t('agenda.dinnerStart') }}</p> 
            <p><b>23:00</b> - {{ $t('agenda.amberCeremony') }}</p>  
          </ul>
        </div>
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/the-ring.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
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
  