<template>
    <div class="p-4">
      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2198.4512698852022!2d23.789747176536572!3d55.06558144471301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e6e2551ab33125%3A0xc879ee13c98379d4!2sBabtyno%20dvaras!5e1!3m2!1slt!2slt!4v1681583651204!5m2!1slt!2slt" style="border:0;" allowfullscreen="false" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full rounded-lg"></iframe>
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">Getting there</h2>
          <p class="pb-4 text-justify">
            <b>By car</b> - the Babtynas Manor is around 30-minute drive away from the Kaunas city centre, easily reachable by car.
          </p>
          <p class="text-justify">
            <b>By taxi</b> - a Bolt taxi from Kaunas to the location would cost around 20 euro.
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
          <h2 class="text-3xl font-bold mb-4 text-center">History</h2>
          <p class="text-justify">
            We chose the Babtynas manor for our special day not only because of its proximity to Kaunas but also because of its unusual charm and rich history. The manor was built near the village of Babtynas in the 16th century. The first buildings here were wooden but in the 18th century, the manor was rebuilt using bricks and turned it into a spectacular mansion. Throughout the years, the Babtynas manor was owned by different noble families.
          </p>
        </div>
      </div>
      
      <div class="content-row flex items-center justify-center py-4">
        <div class="mobile content-picture w-1/2 pb-3/4">
          <img src="../assets/dvaras-2.jpeg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
        </div>
        <div class="content-text w-1/2 px-8 flex flex-col items-center">
          <h2 class="text-3xl font-bold mb-4 text-center">20th century</h2>
          <p class="pb-4 text-justify">
            Between the wars, general Vladas Nagevičius received the land as an award for the establishment of the Lithuanian army. He and his family enjoyed living in the manor and nurturing its farm and cultural traditions. On weekends, the general often hired a steamboat and brought guests from Kaunas - actors, painters, musicians, poets. The manor became famous for its St. John's Day (June 24th) celebrations, where the intelligentsia of Kaunas and state leaders gathered.
          </p>
          <p class="text-justify">
            World War II interrupted the manor's prosperity. During the Soviet occupation, it was used as an office of the collective farm area and an apartment building. Over that period, only 4.5 of the 20 estate buildings survived.
          </p>
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
          <h2 class="text-3xl font-bold mb-4 text-center">Present times</h2>
          <p class="pb-4 text-justify">
            In 1999 a new phase of the manor's life began when Mindaugas Šventoraitis bought the property and little by little adapted it for life and cultural activities. Nowadays, the Lithuanian Kite club often organises their events in the manor, and the space is also used for concerts, art, yoga, and wellness meetings. 
          </p>
          <p class="text-justify">
            The estate has also been used as a set for movies (The Fortress of Sleeping Butterflies, 2012) and music videos (Kunigunda, 2022). Mindaugas has preserved the eclectic style and historical elements of the manor and added a collection of motor vehicles and other quirky collectables, which you can freely explore in the buildings around the main palace.
          </p>
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