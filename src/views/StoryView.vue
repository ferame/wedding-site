<template>
    <div class="story p-4">
      <div class="content-row flex items-center justify-center py-4">
        <div class="content-picture w-1/2 pb-3/4">
          <img src="../assets/us-near-castle.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">Our Story</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">
              As you might know we both studied in Scotland - Elena in Glasgow and Justin in Edinburgh. Thus, we did not meet each other until 2018 when we both attended work training in London. A month later, while on a group trip to a rainy Scottish village, Elena’s umbrella broke and Justinas kindly offered to shelter her under his.
            </p>
            <p>We have been inseparable ever since this cute umbrella story. Umbrellas are also engraved on the wedding rings that we will exchange on 15th June. We are not expecting rain on the day but if it happens, we will happily welcome it.</p>
          </div>
        </div>
      </div>

      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <img src="../assets/best-man.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">Best man</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">
              Justinas (Ališauskas) met Justinas (Reigis) at University and it was love at first sight. After they graduated together, they started the same job. It was around this time when their bromance was broken by Elena and Justinas moved out of the flat he was sharing with Reigis.
            </p>
            <p>
              Justinas likes to think that it is because of these unfortunate circumstances that Reigis moved back to Lithuania. Nevertheless, Justinas quickly realised he cannot live too far away from Reigis and followed him. Reigis currently lives in Vilnius with his wife and baby.
            </p>
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
          <h2 class="text-3xl font-bold mb-4 text-center">Maid of Honor</h2>
          <div class="flex flex-col leading-relaxed text-justify">
            <p class="pb-4">
              Elena and Kasia’s story is very similar to the one of Justinas and Reigis. They have shared the same bachelor and masters programs, the same part-time and full time jobs, as well as the same flat. They have also shared some tears (mostly related to programming) and many good moments (sometimes related to programming). Kasia currently lives in England and is a PhD candidate in Neuroscience. 
            </p>
            <p>
              Kasia and Reigis witnessed our first meetings so they are most qualified to officially witness our wedding.
            </p>
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