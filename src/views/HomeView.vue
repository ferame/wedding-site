<script setup lang="ts">
</script>

<template>
  <main>
      <!-- <img src="../assets/panorama.jpg"/> -->
      <div class="bg-white p-4">
        <div class="content-row flex items-center justify-center">
          <div class="content-picture w-1/2 pb-3/4">
            <img src="../assets/squareish-home-picture.jpg" alt="Image" class="w-full h-full rounded-lg object-contain object-center">
          </div>
          <div class="w-1/2 px-4 flex flex-col items-center">
            <h2 class="text-3xl font-bold mb-4 text-center">We are getting married!</h2>
            <div class="flex flex-col leading-relaxed">
              <p><b>When?</b> - 15:00, Thursday, June 15th, 2023</p>
              <p><b>Where?</b> - Babtyno Dvaras, Kaunas region, Lithuania</p>
              <p><b>Who is the main of honor?</b> - Kasia Mojescik</p>
              <p><b>Who is the best man?</b> - Justinas Reigis</p>
              <p><b>What do I need to do?</b> - RSVP here by June 1st</p>
            </div>
            <button class="my-3 px-4 py-2 rounded-lg border-2 border-black hover:bg-[#EE576A] text-black hover:text-white">
                <RouterLink to="/rsvp"><b>Respond To Invitation Here</b></RouterLink>
            </button>
          </div>
        </div>
      </div>
  </main>
</template>

<style scoped>
</style>